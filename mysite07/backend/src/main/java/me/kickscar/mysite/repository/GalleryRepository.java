package me.kickscar.mysite.repository;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import me.kickscar.mysite.vo.GalleryVo;

@Repository
public class GalleryRepository {
	@Autowired
	private SqlSession sqlSession;

	public Boolean insert(GalleryVo vo) {
		return 1 == sqlSession.insert("gallery.insert", vo);
	}

	public Boolean delete(Long no) {
		return 1 == sqlSession.delete("gallery.delete", no);
	}

	public List<GalleryVo> findAll() {
		return sqlSession.selectList("gallery.findAll");
	}
}
