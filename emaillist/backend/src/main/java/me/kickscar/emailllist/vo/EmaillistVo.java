package me.kickscar.emailllist.vo;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
//@EqualsAndHashCode
//@NoArgsConstructor
//@AllArgsConstructor
public class EmaillistVo {
	private Long no;
	private String firstName;
	private String lastName;
	private String email;	
}