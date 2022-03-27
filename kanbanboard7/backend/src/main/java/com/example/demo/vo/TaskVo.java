package com.example.demo.vo;

public class TaskVo {
	private Long no;
	private String name;
	private String done;
	private Long cardNo;
	
	public Long getNo() {
		return no;
	}
	public void setNo(Long no) {
		this.no = no;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDone() {
		return done;
	}
	public void setDone(String done) {
		this.done = done;
	}
	public Long getCardNo() {
		return cardNo;
	}
	public void setCardNo(Long cardNo) {
		this.cardNo = cardNo;
	}
	
	@Override
	public String toString() {
		return "TaskVo [no=" + no + ", name=" + name + ", done=" + done + ", cardNo=" + cardNo + "]";
	}
}
