package kanbanboard.dto;

import lombok.Getter;

@Getter
public class JsonResult<T> {
	private final String result;	// "success" or "fail"
	private String message;			// set if fail or not set
	private T data;					// set if success or not set
	
	private JsonResult(T data) {
		result = "success";
		this.data = data;
	}
	
	private JsonResult(String message) {
		result = "fail";
		this.message = message;
	}	
	
	public static <T> JsonResult<T> success(T data) {
		return new JsonResult<>(data);
	}
	
	public static JsonResult<String> fail(String message) {
		return new JsonResult<>(message);
	}
}