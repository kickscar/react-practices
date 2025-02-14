package emaillist.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import emaillist.dto.JsonResult;
import emaillist.vo.EmaillistVo;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
public class ApiController {

	@GetMapping("/api")
	public ResponseEntity<JsonResult> read(@RequestParam(value="kw", required=true, defaultValue="") String keyword) {
        log.info("Request[GET /api]:{}", keyword);
		return ResponseEntity
					.status(HttpStatus.OK)
					.body(JsonResult.success(null));
	}
	
	@PostMapping("/api")
	public ResponseEntity<JsonResult> create(@RequestBody EmaillistVo vo) {
        log.info("Request[POST /api]:{}", vo);
		return ResponseEntity
					.status(HttpStatus.OK)
					.body(JsonResult.success(vo));
	}
	
}
