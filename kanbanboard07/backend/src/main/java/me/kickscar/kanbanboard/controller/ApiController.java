package me.kickscar.kanbanboard.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import me.kickscar.kanbanboard.service.CardService;
import me.kickscar.kanbanboard.service.DeckService;
import me.kickscar.kanbanboard.vo.CardVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import me.kickscar.kanbanboard.dto.JsonResult;
import me.kickscar.kanbanboard.repository.CardRepository;
import me.kickscar.kanbanboard.repository.TaskRepository;
import me.kickscar.kanbanboard.vo.TaskVo;

@RestController
@RequestMapping("/api")
public class ApiController {
	@Autowired
	private DeckService deckService;

	@Autowired
	private CardService cardService;

	@Autowired
	private TaskRepository taskRepository;

	@GetMapping("/deck")
	public ResponseEntity<JsonResult> readCard() {
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(deckService.getCardList()));
	}

	@PutMapping("/card/mv")
	public ResponseEntity<JsonResult> updateCard(@RequestBody Map moving) {
		// System.out.println(moving);
		cardService.updateCardOrder(moving);

		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success("ok"));
	}

	@GetMapping("/task")
	public ResponseEntity<JsonResult> readTask(Long cardNo) {
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(taskRepository.findAllByCardNo(cardNo)));
	}

	@PostMapping("/task")
	public ResponseEntity<JsonResult> createTask(@RequestBody TaskVo taskVo) {
		taskRepository.insert(taskVo);
		
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(taskVo));
	}

	@SuppressWarnings("serial")
	@PutMapping("/task/{no}")
	public ResponseEntity<JsonResult> updateTask(@PathVariable("no") Long no, String done) {
		taskRepository.updateDone(no, done);
		
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(Map.of("no", no, "done", done)));
	}

}
