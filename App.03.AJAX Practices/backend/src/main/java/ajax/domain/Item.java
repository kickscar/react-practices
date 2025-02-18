package ajax.domain;

import lombok.*;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@RequiredArgsConstructor
@EqualsAndHashCode(exclude = {"type", "name", "image"})
public class Item {
	@NonNull
	private Long id;

	@NonNull
	private String type;

	@NonNull
	private String name;

	private String image;

	public Item(@NonNull Long id) {
		this.id = id;
	}
}