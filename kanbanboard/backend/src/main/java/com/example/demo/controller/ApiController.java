package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.JsonResult;
import com.example.demo.repository.CardRepository;

@RestController
public class ApiController {
	
	@Autowired
	private CardRepository cardRepository;
	
	@GetMapping("/api")
	public ResponseEntity<JsonResult> read() {
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(null));
	}
}
