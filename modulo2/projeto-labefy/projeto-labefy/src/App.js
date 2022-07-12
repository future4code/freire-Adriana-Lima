import React from "react";
import styled from "styled-components";
import AddPlaylist from "./components/AddPlaylist";
import Playlists from "./components/Playlists";

const AppConteiner = styled.div`
  background-color: #140951;
  color: white;
  margin: 0;
`;

const Headers = styled.header`
  background-color: #6f9b3c;
  color: red;
  font-size: 40px;
  height:50px;
  margin: 0;
  text-align: center; 
`;

const Footers = styled.footer`
  background-color: #6f9b3c;
  display: flex;
  justify-content: center;
  position: absolute;
  width: 99%;
  height: 10%;
  padding-bottom: 0;
  margin: 0;
`;

const SocialIcone = styled.img`
  width: 3%;
  padding-top: 1%;
  padding-right: 2%;
  padding-left: 5%;
  margin: 0;
`;

class App extends React.Component {
  state = {
    currentPage: "addPlaylist"
  };

  changePage = () => {
    if (this.state.currentPage === "addPlaylist") {
      this.setState({ currentPage: "playlists" });
    } else {
      this.setState({ currentPage: "addPlaylist" });
    }
  };

  render() {
    return (
      <AppConteiner>
        <Headers>         
          <strong>Labefy</strong>
        </Headers>
        {this.state.currentPage === "addPlaylist" ? (
          <AddPlaylist changePage={this.changePage} />
        ) : (
          <Playlists changePage={this.changePage} />
        )}
        <Footers>
          <SocialIcone src= "/img/Facebook.png" />
          <SocialIcone src= "/img/Instagram.png" />
          <SocialIcone src= "/img/Linkedin.png" />
        </Footers>
      </AppConteiner>
    );
  }
}

export default App;
