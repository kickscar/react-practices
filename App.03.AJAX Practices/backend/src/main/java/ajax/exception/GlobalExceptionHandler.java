package ajax.exception;

import java.io.PrintWriter;
import java.io.StringWriter;
import java.text.MessageFormat;

import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.NoHandlerFoundException;
import org.springframework.web.servlet.resource.NoResourceFoundException;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@ControllerAdvice
public class GlobalExceptionHandler {

	@ExceptionHandler(NoHandlerFoundException.class)
	public String handlerNoHandlerFoundException(HttpServletRequest request) throws Exception {
		return MessageFormat.format("forward:{0}", request.getHeader("accept").matches(".*application/json.*") ? "/error/404" : "/");
	}

	@ExceptionHandler(NoResourceFoundException.class)
	public void handlerNoResourceFoundException(HttpServletResponse response) throws Throwable {
		response.setStatus(HttpServletResponse.SC_NOT_FOUND);
		response.setContentType("text/plain");
		response.setCharacterEncoding("UTF-8");
		response.getWriter().print("No Resource Found");
	}

	@ExceptionHandler(Exception.class)
	public String handler(HttpServletRequest request, Exception e) throws Exception {
		// logging
		StringWriter errors = new StringWriter();
		e.printStackTrace(new PrintWriter(errors));
		log.error(errors.toString());

		// forward to error.WhitelabelController
		request.setAttribute("errors", errors.toString());
		return "forward:/error/500";
	}
}