import React from "react";
import axios from "axios";
import styled from "styled-components";

const AddConteiner = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  text-align: center;
  padding: 5%;
  margin: 0;
`;

const Title = styled.h2`
  font-size: 40px;
`;

const AdicionarCampo = styled.input`
  width: 30%;
  padding: 1%;
  margin-bottom: 5%;
`;

const ButtonAdd = styled.button`
  font-size: 16px;
  width: 10%;
  padding: 1%;
  background-color: red;
  color: white;
`;

const ButtonViewPlaylists = styled.button`
  font-size: 14px;
  border-radius: 10px;
  width: 10%;
  padding: 1%;
  background-color: red;
  color: white;
`;

class AddPlaylist extends React.Component {
  state = {
    name: ""
  };

  createNewPlaylist = () => {
    const body = {
      name: this.state.name
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        body,
        {
          headers: {
            Authorization: "Adriana-Lima-Freire"
          }
        }
      )
      .then((response) => {
        alert(`Playlist ${this.state.name} criada com sucesso!`);
        this.setState({ name: "" });
      })
      .catch((error) => {
        console.log(error.message);
        alert("Não é possível criar a playlist com este nome!");
      });
  };

  onChangeNameValue = (event) => {
    this.setState({ name: event.target.value });
  };

  render() {
    return (
      <AddConteiner>
        <Title>Seja bem vindo(a)!</Title>

        <p>Criar uma nova Playlist:</p>
        <AdicionarCampo
          value={this.state.name}
          onChange={this.onChangeNameValue}
          placeholder={"Nome da Playlist"}
        />
        <ButtonAdd onClick={this.createNewPlaylist}>Salvar</ButtonAdd>

        <p>Visualizar playlists criadas:</p>
        <ButtonViewPlaylists onClick={this.props.changePage}>
          Suas Playlists
        </ButtonViewPlaylists>
      </AddConteiner>
    );
  }
}

export default AddPlaylist;
