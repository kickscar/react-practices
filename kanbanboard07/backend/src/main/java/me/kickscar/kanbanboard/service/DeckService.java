package me.kickscar.kanbanboard.service;

import me.kickscar.kanbanboard.repository.DeckRepository;
import me.kickscar.kanbanboard.vo.DeckVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Service
public class DeckService {
    @Autowired
    private DeckRepository deckRepository;

    public List<DeckVo> getCardList() {
        return deckRepository.findAll();
    }

    @Transactional
    public void updateDeckOrder(Map moving) {
        deckRepository.updateOrderNos(moving);
        deckRepository.updateOrderNo(moving);
    }
}
