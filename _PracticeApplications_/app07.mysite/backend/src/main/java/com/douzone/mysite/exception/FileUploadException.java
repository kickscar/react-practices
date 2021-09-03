package com.douzone.mysite.exception;

public class FileUploadException extends RuntimeException {
	private static final long serialVersionUID = 1L;

	public FileUploadException() {
		super("FileUploadException Occurs");
	}

	public FileUploadException(String message) {
		super(message);
	}
}