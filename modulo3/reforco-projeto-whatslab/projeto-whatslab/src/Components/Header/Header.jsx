import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.div`
  background-color: #055b5c;
  border: 1px solid white;
  border-radius: 10px;
  width: 100%;
  height: 80px;
  
  h3 {
    color: white;
    text-align: center;
    font-size: 25px;
    
    
  }
`

const Header = () => {
  return (
    <HeaderContainer>
      
      <h3>Whatslab</h3>

    </HeaderContainer>
  )
}
export default Header;