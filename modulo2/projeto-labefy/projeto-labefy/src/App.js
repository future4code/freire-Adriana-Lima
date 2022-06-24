import React from "react";
import styled from "styled-components";
import Playlists from "./Components/Playlists";
import AdicionarMusicas from "./Components/AdicionarMusicas";





const Background = styled.div`
    width: 100%;
    min-height: 100%;
    background-color: #dd868c;
    background-repeat: repeat-y;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
`


export default class App extends React.Component {
    state = {
        trocarTela: "verPlaylists"
    }

    mudaTela = () => {       
        this.setState({trocarTela: !this.state.trocarTela});
    }

    render () {

      const mudarTela = () => {   
            if (this.state.trocarTela === "verPlaylists") {
              return 
              <Playlists/>
            } else if (this.state.trocarTela === "verAddMusicas") {
                return
                <AdicionarMusicas/>
            }
        }
          return (

                <Background>
                  
                    {mudarTela()}

                </Background>
            );
        }
};