package me.kickscar.kanbanboard.vo;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.List;

@Setter
@Getter
@ToString
public class DeckVo {
    private Long no;
    private String title;
    private Integer orderNo;
    private List<CardVo> cards;
}
