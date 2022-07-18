import styled from 'styled-components'

export const DivContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    margin-left: auto;
    /* width: 80vw; */

`
// const ImgHome = styled.img`
// display: flex;
//     width: 10vw;
//     height: 500px;
//     position: absolute;

// `
export const LoginDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    width: 140vw;
    height: 77vh;

    input {
        border-radius: 10px;
        padding: 8px 16px;
        margin: 8px 0;
        width: 40%;
    }

`
export const ButtonDiv = styled.div`
    display: flex;
    justify-content: space-around;   
    align-items: center;
    align-content: center;
    width: 20vw;  
    margin-top: 20px;
    
    button {
        border-radius: 10px;
        background-color: red;
        border: none;
        color: white;
        padding: 5px 32px;
        text-align: center;
        text-decoration: none;
        font-size: 14px;
    }  
`