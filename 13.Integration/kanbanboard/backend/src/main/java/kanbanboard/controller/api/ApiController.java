package kanbanboard.controller.api;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import kanbanboard.domain.Card;
import kanbanboard.domain.Task;
import kanbanboard.dto.JsonResult;
import kanbanboard.repository.CardRepository;
import kanbanboard.repository.TaskRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/kanbanboard")
public class ApiController {

	private final CardRepository cardRepository;
	private final TaskRepository taskRepository;

	public ApiController(CardRepository cardRepository, TaskRepository taskRepository) {
		this.cardRepository = cardRepository;
		this.taskRepository = taskRepository;
	}

	@GetMapping("/card")
	public ResponseEntity<JsonResult<List<Card>>> readCard() {
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(cardRepository.findAll()));
	}
	
	@GetMapping("/task")
	public ResponseEntity<JsonResult<List<Task>>> readTask(Long cardNo) {
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(taskRepository.findAllByCardNo(cardNo)));
	}

	@PostMapping("/task")
	public ResponseEntity<JsonResult<Task>> createTask(@RequestBody Task task) {
		taskRepository.insert(task);
		
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(task));
	}

	@PutMapping("/task/{no}")
	public ResponseEntity<JsonResult<Map<?, ?>>> updateTask(@PathVariable Long no, String done) {
		taskRepository.updateDone(no, done);
		
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(new HashMap<String, Object>() {{
				    put("no", no);
				    put("done", done);
				}}));
	}

	@DeleteMapping("/task/{no}")
	public ResponseEntity<JsonResult<Long>> deleteTask(@PathVariable Long no) {
		taskRepository.delete(no);
		
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(no));
	}	
}
