import axios from "axios";
import React from "react";




export default class AdicionarMusicas extends React.Component {
    state = {
        listaReproducao: [],
        musicas: []
        nome: "",
        artista: "",
        urlMusica: "" 
    }

    handleMusicas = (event) => {
        this.setState({musicas: event.target.value})
    }

    handleNome = (event) => {
        this.setState({nome: event.target.value})
    }

    handleUrlMusica = (event) => {
        this.setState({urlMusica: event.target.value})
    }

    addTrackToPlaylist = () => {
        const body = {
            name: this.state.nome,
            artist: this.state.artista,
            url: this.state.urlMusica

        }

        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks`, body, {
            headers: {
                Authorization: "Adriana-Lima-Freire"
            }
        })
        .then((res) => {
            this.setState({ nome: ""});
            this.setState({ artista: ""});
            this.setState({ urlMusica: ""});
            alert('Música adicionada com sucesso')

        })
        .catch((err) => {
            console.log(err.message);
            alert('Não foi possível adicionar a música')
        })
    }


    render() {
        return (
            <div>
                <input
                placeholder=""
                value={}
                onChange={}/>

            </div>
        )
    }
}