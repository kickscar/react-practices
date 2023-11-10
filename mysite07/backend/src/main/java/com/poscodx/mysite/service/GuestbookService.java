package com.poscodx.mysite.service;

import java.util.List;

import com.poscodx.mysite.repository.GuestbookRepository;
import com.poscodx.mysite.vo.GuestbookVo;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class GuestbookService {
	final GuestbookRepository guestbookRepository;

	public GuestbookService(GuestbookRepository guestbookRepository) {
		this.guestbookRepository = guestbookRepository;
	}

	public List<GuestbookVo> getContentsList(Long no) {
		return guestbookRepository.findAll(no);
	}
	
	@Transactional
	public boolean deleteContents(Long no, String password) {
		GuestbookVo vo = new GuestbookVo();
		vo.setNo(no);
		vo.setPassword(password);
		
		return guestbookRepository.delete(vo);

// Test.		
//		vo.setNo(null);
//		vo.setName("안대혁");
//		vo.setMessage("테스트");
//		vo.setPassword("1234");
//		guestbookRepository.insert(vo);
//		return true;
	}

	public boolean addContents(GuestbookVo vo) {
		return guestbookRepository.insert(vo);
	}
}
