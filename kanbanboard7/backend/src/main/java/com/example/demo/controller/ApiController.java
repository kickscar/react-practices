package com.example.demo.controller;

import java.util.HashMap;

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

import com.example.demo.dto.JsonResult;
import com.example.demo.repository.CardRepository;
import com.example.demo.repository.TaskRepository;
import com.example.demo.vo.TaskVo;

@RestController
@RequestMapping("/api")
public class ApiController {
	
	@Autowired
	private CardRepository cardRepository;

	@Autowired
	private TaskRepository taskRepository;

	@GetMapping("/card")
	public ResponseEntity<JsonResult> readCard() {
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(cardRepository.findAll()));
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
				.body(JsonResult.success(new HashMap<String, Object>() {{
				    put("no", no);
				    put("done", done);
				}}));
	}

}
