package ajax;

import ajax.domain.Item;
import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.LinkedList;
import java.util.List;

@OpenAPIDefinition(info = @Info(
	title = "AJAX Practices API Documentation",
	description = "These are APIs for AJAX practices.",
	version = "v1.0.0")
)
@SpringBootApplication
public class AjaxBackendApplication {

	@Bean("items")
	public List<Item> itemList() {
		return new LinkedList<>(List.of(
			new Item(4L, "BOOK", "spring in action"),
			new Item(3L, "CLOTHE", "hood shirt"),
			new Item(2L, "BOOK", "history of western civilization"),
			new Item(1L, "FOOD", "apple pie")
		));
	}

	public static void main(String[] args) {
		SpringApplication.run(AjaxBackendApplication.class, args);
	}
}