package tabbox.controller;

import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import java.text.MessageFormat;
import java.util.Optional;
import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.http.HttpServletRequest;

@Controller
@RequestMapping("/error")
public class WhitelabelErrorController implements ErrorController {

	@RequestMapping(value = {"", "/{statusCode:[0-9]{3}}"})
	public String errorHanlder(@PathVariable Optional<Integer> statusCode, HttpServletRequest request) {
		return MessageFormat.format("errors/{0}", statusCode
				.map(Object::toString)		// from GlobalExceptionHandler
				.orElse(Optional
						.ofNullable(request.getAttribute(RequestDispatcher.ERROR_STATUS_CODE))
						.map(Object::toString)
						.orElse("unknown")	// from Whitelabel
				)
		);
	}
	
}