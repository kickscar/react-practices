package me.kickscar.mysite.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import me.kickscar.mysite.dto.JsonResult;
import me.kickscar.mysite.service.GuestbookService;
import me.kickscar.mysite.vo.GuestbookVo;

@RestController
@RequestMapping("/api/guestbook")
public class GuestbookController {
	@Autowired
	private GuestbookService guestbookService;

	@GetMapping("")
	public ResponseEntity<JsonResult> list(@RequestParam(value="no", required=true, defaultValue="0") Long startNo) {
		return ResponseEntity.status(HttpStatus.OK).body(JsonResult.success(guestbookService.getMessageList(startNo)));
	}

	@PostMapping("")
	public ResponseEntity<JsonResult> add(@RequestBody GuestbookVo vo) {
		guestbookService.addMessage(vo);
		vo.setPassword("");		
		return ResponseEntity.status(HttpStatus.OK).body(JsonResult.success(vo));
	}

	@DeleteMapping("/{no}")
	public ResponseEntity<JsonResult> delete(@PathVariable("no") Long no, @RequestParam(value="password", required=true, defaultValue="") String password) {
		Boolean result = guestbookService.deleteMessage(no, password);		
		return ResponseEntity.status(HttpStatus.OK).body(JsonResult.success(result ? no : null));
	}
}