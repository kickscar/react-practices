package me.kickscar.mysite.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import me.kickscar.mysite.repository.GuestbookRepository;
import me.kickscar.mysite.vo.GuestbookVo;

@Service
public class GuestbookService {
	final GuestbookRepository guestbookRepository;

	public GuestbookService(GuestbookRepository guestbookRepository) {
		this.guestbookRepository = guestbookRepository;
	}

	public List<GuestbookVo> getMessageList(Long no) {
		return guestbookRepository.findAll(no);
	}
	
	@Transactional
	public boolean deleteMessage(Long no, String password) {
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

	public boolean addMessage(GuestbookVo vo) {
		return guestbookRepository.insert(vo);
	}
}
