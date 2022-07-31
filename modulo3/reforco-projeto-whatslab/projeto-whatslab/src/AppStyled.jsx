import styled from 'styled-components'

export const AppContainer = styled.div`
    display: grid;
    background-color: #cff0f1;
    width: 30%;
    min-height: 80vh;
    height: 80%;
    place-items: center;
    margin: 10px auto;
    border-radius: 10px;
    font-size: 30px;
    

    display: flex;
    flex-direction: column;

`
export const Text = styled.div` 
    min-height: 70vh;
    
`

export const DivContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    place-items: center;
    width: 100%;
    border: 1px solid white;
    border-radius: 10px;
    background-color: #055b5c;

    input {
        display: flex; 
        width: 90%;
        padding: 5px;
        font-size: 20px;
        border-radius: 40px;
        margin: 5px;
        float: left;
     
    }

    button {
        background-color: #22752d;
        color: white;
        padding: 5px 30px;
        font-size: 30px;
        border-radius: 40px;
    
    }
`