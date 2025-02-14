package emaillist.exception;

import java.io.PrintWriter;
import java.io.StringWriter;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.NoHandlerFoundException;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@ControllerAdvice
public class GlobalExceptionHandler {

	@ExceptionHandler(NoHandlerFoundException.class)
	public void handlerNoHandlerFoundException(HttpServletRequest request, HttpServletResponse response, Exception exception) throws Exception {
		String accept = request.getHeader("accept");
		request
				.getRequestDispatcher(accept.matches(".*application/json.*") ? "/error/404" : "/")
				.forward(request, response);
	}

	@ExceptionHandler(Exception.class)
	public void handler(HttpServletRequest request, HttpServletResponse response, Exception e) throws Exception {
		// logging
		StringWriter errors = new StringWriter();
		e.printStackTrace(new PrintWriter(errors));
		log.error(errors.toString());

		// forwarding to WhitelabelErrorController(through DispatcherServlet)
		request.setAttribute("errors", errors.toString());
		request.getRequestDispatcher("/error/500").forward(request, response);
	}
}
