package com.example.demo.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.JsonResult;

@RestController
// @CrossOrigin(origins = {"http://localhost:9999"}, allowedHeaders = "*", allowCredentials="false", methods={RequestMethod.GET})
public class ApiController {		
	@GetMapping("/api")
	public ResponseEntity<JsonResult> read(@RequestParam(value="kw", required=true, defaultValue="") String keyword) {
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(null));
	}
	
//	@PostMapping("/api")
//	public ResponseEntity<JsonResult> create(@RequestBody EmaillistVo vo) {
//		emaillistRepository.insert(vo);
//		
//		return ResponseEntity
//				.status(HttpStatus.OK)
//				.body(JsonResult.success(vo));
//	}
}
