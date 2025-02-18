package ajax.controller.api;

import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.*;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import ajax.domain.Item;
import ajax.dto.JsonResult;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.multipart.MultipartFile;

@Tag(name = "ItemController", description = "Item APIs")
@Slf4j
@RestController
@RequestMapping("/item")
public class ItemController {
	private final List<Item> items;

	public ItemController(@Qualifier("items") List<Item> items) {
		this.items = items;
	}

	@Operation(summary = "Create a New Item")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "200", description = "successful operation", content = @Content(schema = @Schema(implementation = JsonResult.class))),
			@ApiResponse(responseCode = "500", description = "Internal Server Error", content = @Content(schema = @Schema(implementation = JsonResult.class)))
	})
	@PostMapping
	public ResponseEntity<JsonResult<Item>> create(@RequestBody Item item) {
		log.info("Request[POST /api, Content-Type: application/json][{}]", item.toString());

		Long maxId = Optional
				.ofNullable(items.isEmpty() ? null : items.getFirst())
				.map(Item::getId)
				.orElse(0L);
		item.setId(maxId + 1);

		items.addFirst(item);

		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(item));
	}

	@Operation(summary = "Create a New Item Including Image")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "200", description = "successful operation", content = @Content(schema = @Schema(implementation = JsonResult.class))),
			@ApiResponse(responseCode = "500", description = "Internal Server Error", content = @Content(schema = @Schema(implementation = JsonResult.class)))
	})
	@PostMapping(consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
	public ResponseEntity<JsonResult<Item>> create(Item item, MultipartFile file) {
		try {
			log.info("Request[POST /api, Content-Type: multipart/form-data][{},{}]", item.toString(), file.getOriginalFilename());

			final String saveFilename = UUID
					.randomUUID()
					.toString()
					.concat(".")
					.concat(Objects.requireNonNull(file.getOriginalFilename()).substring(file.getOriginalFilename().lastIndexOf('.') + 1));

			Files.write(Files
					.createDirectories(Paths.get("/Users/kickscar/ajax-practices-uploads/images"))
					.resolve(saveFilename), file.getBytes());

			Long maxId = Optional
					.ofNullable(items.isEmpty() ? null : items.getFirst())
					.map(Item::getId)
					.orElse(0L);

			item.setId(maxId + 1);
			item.setImage("/assets/images/" + saveFilename);
			items.addFirst(item);

			return ResponseEntity
					.status(HttpStatus.OK)
					.body(JsonResult.success(item));

		} catch(Exception ex) {
			throw new RuntimeException(ex.toString());
		}
	}

	@GetMapping
	public ResponseEntity<JsonResult<List<Item>>> read() {
		log.info("Request[GET /api]");

		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(items));
	}

	@GetMapping("/{id}")
	public ResponseEntity<JsonResult<Item>> read(@PathVariable Long id) {
		log.info("Request[GET /api/{}]", id);

		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(items
						.stream()
						.filter(e -> e.getId().equals(id))
						.findAny()
						.orElse(null)));
	}

	@PutMapping("/{id}")
	public ResponseEntity<JsonResult<Item>> update(@PathVariable Long id, Item item) {
		log.info("Request[PUT /api/{}, Content-Type: application/x-www-form-urlencoded][{}]", id, item.toString());

		Optional<Item> optionalItem = Optional.ofNullable(items.get(items.indexOf(new Item(id))));
		optionalItem.ifPresent(c -> {
			c.setName(item.getName());
			c.setType(item.getType());
		});

		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(optionalItem.orElse(null)));
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<JsonResult<Long>> delete(@PathVariable Long id) {
		log.info("Request[DELETE /api/{}]", id);

		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(items.removeIf(item -> item.getId().equals(id)) ? id : -1));
	}
}
