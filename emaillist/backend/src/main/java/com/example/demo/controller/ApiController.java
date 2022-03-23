package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.JsonResult;
import com.example.demo.repository.EmaillistRepository;
import com.example.demo.vo.EmaillistVo;

@RestController
@CrossOrigin(origins = {"http://localhost:9999"}, allowedHeaders = "*", allowCredentials="false", methods={RequestMethod.GET})
public class ApiController {
	
	@Autowired
	private EmaillistRepository emaillistRepository;
	
	@GetMapping("/api")
	public ResponseEntity<JsonResult> read(@RequestParam(value="kw", required=true, defaultValue="") String keyword) {
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(emaillistRepository.findAll(keyword)));
	}
	
	@PutMapping("/api")
	public ResponseEntity<JsonResult> create(@RequestBody EmaillistVo vo) {
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(emaillistRepository.insert(vo)));
	}
}
