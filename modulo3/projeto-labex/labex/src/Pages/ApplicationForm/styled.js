import styled from 'styled-components'

export const DivNav = styled.div`
    margin: 30px 0;
    padding: 0;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
        
    }

`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 500px;

input {
    width: 100%;
    height: 30px;
    border-radius: 10px;
    padding: 4px 8px;
    border-width: 1px;
    border-color: gray;
    margin: 0 0 15px 0;
}
select {
    width: 518px;
    height: 40px;
    border-radius: 10px;
    padding: 4px 8px;
    border-width: 1px;
    margin: 0 0 15px 0;
  }

` 

export const ButtonForm = styled.div`

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