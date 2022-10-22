import React, { useEffect, useState } from 'react';
import { BACK_CARD_URL, BASE_URL } from '../../contants/url';
import { getCards } from "../../services/getCards"
import { ButtonContainer, StyledImg, StyleButton, CardsContainer } from './styled';
import PopCard from "../PopCard/PopCard"

function Cards() {
    const [cards, setCards] = useState([])
    const [addCards, setAddCards] = useState(false)
    const [selectCard, setSelectCard] = useState({})
    const [shuffled, setShuffled] = useState(false)

    useEffect(() => {
        getCards(cards, setCards)
    }, [])

    let copyArray = cards.length > 0 && [...cards]

    const shuffledCards = (array) => {
        setShuffled(true)
        let newPosition
        let temp
        
        for (let card of array) {
            card.flipCard = false
        }
        for (let i = array.length - 1; i > 0; i--) {
            newPosition = Math.floor(Math.random() * i);
            temp = array[i]
            array[i] = array[newPosition]
            array[newPosition] = temp  
        }
        setCards(array) 
    
    }

    const popCard = (card) => {
        setAddCards(true)
        card.flipCard = true
        setSelectCard(card)
    }

    const restartCards = () => {
        setShuffled(false)
        getCards(cards, setCards)
    }

    const cardsMap = cards.length > 0 && cards.map((card) => {
        return (card.flipCard ?
            <StyledImg src={`${BASE_URL}/${card.image}`} alt={card.name} key={card.name} onClick={() => popCard(card)} />
            :
            <StyledImg src={`${BACK_CARD_URL}`} alt={card.name} key={card.name} onClick={() => popCard(card)} />)
    })

    return (
        <di>
           <ButtonContainer>
            {shuffled ? (
                <>

                <StyleButton onClick={restartCards}>Recomeçar</StyleButton>
                <StyleButton onClick={() => shuffledCards(copyArray)}>Embaralhar</StyleButton>

                </>
            ) : (
                <StyleButton onclick={() => shuffledCards(copyArray)}>Embaralhar</StyleButton>
            )}
           </ButtonContainer> 

           <CardsContainer>
                {cardsMap}
                <PopCard addCards={addCards} setAddCards={setAddCards} card={selectCard && selectCard} />
            </CardsContainer>
        </di>
    )
}

export default Cards;