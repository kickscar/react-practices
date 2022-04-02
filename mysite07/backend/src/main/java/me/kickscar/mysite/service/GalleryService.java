package me.kickscar.mysite.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import me.kickscar.mysite.repository.GalleryRepository;
import me.kickscar.mysite.vo.GalleryVo;

@Service
public class GalleryService {
	@Autowired
	private GalleryRepository galleryRepository;

	public List<GalleryVo> getGalleryImages() {
		return galleryRepository.findAll();
	}
	
	public Boolean deleteGalleryImage(Long no) {
		return galleryRepository.delete(no);
	}
	
	public Boolean addGalleryImage(GalleryVo vo) {
		return galleryRepository.insert(vo);
	}
}
