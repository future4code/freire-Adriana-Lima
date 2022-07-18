import styled from 'styled-components'

export const ListContainer = styled.div`

@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

`

export const ButtonDiv = styled.div`


    button {
        margin: 10px;
        margin-bottom: 45px;
        height: 40px;
        padding: 0 20px;
        border-radius: 20px;
        border: none;
        color: white;
        font-size: 16px;
        background-color: red;
        min-width: 100px;
    }    
`