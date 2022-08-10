import React from 'react'
import { CardPequenoContainer, Text } from './Styled';


const CardPequeno = (props) => {

    return (
        <CardPequenoContainer>
            <img src={props.imagem}/>
            <Text>
                <strong>{props.titulo}</strong>
                <p>{props.dado}</p>
            </Text>
        </CardPequenoContainer>
    )
}
export default CardPequeno;