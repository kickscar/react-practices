package kanbanboard.exception;

import java.io.PrintWriter;
import java.io.StringWriter;
import java.text.MessageFormat;

import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.NoHandlerFoundException;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.servlet.resource.NoResourceFoundException;

@Slf4j
@ControllerAdvice
public class GlobalExceptionHandler {

	@ExceptionHandler(NoHandlerFoundException.class)
	public String handlerNoHandlerFoundException(jakarta.servlet.http.HttpServletRequest request) throws Exception {
		return MessageFormat.format("forward:{0}", request.getHeader("accept").matches(".*application/json.*") ? "/error/404" : "/");
	}

	@ExceptionHandler(NoResourceFoundException.class)
	public void handlerNoResourceFoundException(jakarta.servlet.http.HttpServletResponse response) throws Throwable {
		response.setStatus(jakarta.servlet.http.HttpServletResponse.SC_NOT_FOUND);
		response.setContentType("text/plain");
		response.setCharacterEncoding("UTF-8");
		response.getWriter().print("No Resource Found");
	}

	@ExceptionHandler(Exception.class)
	public String handler(jakarta.servlet.http.HttpServletRequest request, Exception e) throws Exception {
		// logging
		StringWriter errors = new StringWriter();
		e.printStackTrace(new PrintWriter(errors));
		log.error(errors.toString());

		// forward to error.WhitelabelController
		request.setAttribute("errors", errors.toString());
		return "forward:/error/500";
	}
}