import styled from 'styled-components'

export const Home = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   height: 500px;
`
export const ImgHome = styled.img`
    display: flex;
    width: 100vw;
    height: 500px;
    position: absolute;
   
`
export const ButtonDiv = styled.div`
   display: block;
   margin: 20px;
   justify-content: center;
   z-index: 2;

   h1 {
    color: white;

   }

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
