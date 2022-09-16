package me.kickscar.kanbanboard.service;

import me.kickscar.kanbanboard.repository.CardRepository;
import me.kickscar.kanbanboard.vo.CardVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Service
public class CardService {
    @Autowired
    private CardRepository cardRepository;

    @Transactional
    public void updateCardOrder(Map moving) {
        Map movingDest = (Map)moving.get("dest");
        movingDest.put("ascending", true);
        cardRepository.updateOrderNos(movingDest);

        Map movingSrc = (Map)moving.get("src");
        movingSrc.put("ascending", false);
        cardRepository.updateOrderNos(movingSrc);

        movingDest.put("no", moving.get("no"));
        cardRepository.updateOrderNo(movingDest);
    }

    public List<CardVo> getCardList() {
        return cardRepository.findAll();
    }

    public List<CardVo> getCardList(String deckTitle) {
        return cardRepository.findAll(deckTitle);
    }

}
