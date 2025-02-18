package kanbanboard.domain;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class Card {
	private Long no;
	private String title;
	private String description;
	private String status;
}
