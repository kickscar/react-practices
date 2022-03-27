package com.example.demo.vo;

public class CardVo {
	private Long no;
	private String title;
	private String description;
	private String status;
	
	public Long getNo() {
		return no;
	}
	public void setNo(Long no) {
		this.no = no;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	@Override
	public String toString() {
		return "CardVo [no=" + no + ", title=" + title + ", description=" + description + ", status=" + status + "]";
	}
}
