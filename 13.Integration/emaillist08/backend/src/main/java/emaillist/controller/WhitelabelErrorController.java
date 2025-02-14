package emaillist.controller;

import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;

import emaillist.dto.JsonResult;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/error")
public class WhitelabelErrorController implements ErrorController {
	
	@RequestMapping("/404")
	public ResponseEntity<JsonResult> _404() {
		return ResponseEntity
				.status(404)
				.body(JsonResult.fail("404 UNKNOWN_URL_ERROR"));
	}
	
	@RequestMapping("/500")
	public ResponseEntity<JsonResult> _500() {
		return ResponseEntity
				.internalServerError()
				.body(JsonResult.fail("500 INTERNAL_SERVER_ERROR"));
	}

	@RequestMapping("")
	public ResponseEntity<JsonResult> handleError(HttpServletRequest request) {
		return ResponseEntity.status(Optional
						.ofNullable(request.getAttribute(RequestDispatcher.ERROR_STATUS_CODE))
						.map(v -> Integer.valueOf(v.toString()))
						.orElse(520))
						.body(JsonResult.fail(""));
	}
}