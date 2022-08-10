import React from 'react';
import './StyledImagem.js'
import { ImagemContainer } from './StyledImagem.js';


function ImagemButton(props) {
    return (
        <ImagemContainer>
            <img src={ props.imagem }/>
            <p>{ props.texto }</p>
        </ImagemContainer>

    )
}

export default ImagemButton;