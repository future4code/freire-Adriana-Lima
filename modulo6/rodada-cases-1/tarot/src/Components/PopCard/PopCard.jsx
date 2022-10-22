import React from "react"
import { BASE_URL } from "../../contants/url";
import { DetailsContainer, DivCardContainer, PopTexts } from "./styledPop"


function PopCard ({addCards, setAddCards, card}) {

    return addCards ? (

        <DivCardContainer>

            <DetailsContainer>
                <img src={`${BASE_URL}/${card.image}`} alt={card.name} />
                <PopTexts>
                   <h3>{card.name}</h3>
                   {/* <p>{card.description}</p> */}
                </PopTexts>
            </DetailsContainer>

        </DivCardContainer>
    ) : (
        ""
    );
}

export default PopCard;