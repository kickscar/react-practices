package ajax.controller.error;

import java.util.Optional;

import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ajax.dto.JsonResult;
import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/error")
public class WhitelabelController implements ErrorController {

	@RequestMapping("/404")
	public ResponseEntity<JsonResult<String>> _404() {
		return ResponseEntity
				.status(404)
				.body(JsonResult.fail("unknown url"));
	}


	@RequestMapping("/500")
	public ResponseEntity<JsonResult<String>> _500(@RequestAttribute String errors) {
		return ResponseEntity
				.internalServerError()
				.body(JsonResult.fail(errors));
	}

	@GetMapping
	public ResponseEntity<JsonResult<String>> handleError(HttpServletRequest request) {
		return ResponseEntity.status(Optional
				.ofNullable(request.getAttribute(RequestDispatcher.ERROR_STATUS_CODE))
				.map(statusCode -> Integer.valueOf(statusCode.toString()))
				.orElse(520))
				.body(JsonResult.fail("no message"));
	}
}