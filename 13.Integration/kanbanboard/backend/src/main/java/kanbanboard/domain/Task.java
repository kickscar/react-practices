package kanbanboard.domain;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
public class Task {
	private Long no;
	private String name;
	private String done;
	private Long cardNo;
}
