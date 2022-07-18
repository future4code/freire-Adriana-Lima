import styled from 'styled-components'

export const Home = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   height: 500px;

   @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        & > div{
            height: 80vh;
        }
    }
`
export const ImgHome = styled.img`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 500px;
    position: absolute;   
`
export const ButtonDiv = styled.div`
   display: block;
   margin: 30px;
   z-index: 2;

   h1 {
    color: white;
    text-align: center;

   }

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
    min-width: 150px;
    
    }

`
