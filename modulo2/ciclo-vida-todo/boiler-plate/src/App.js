import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [
        {
          id: 1, 
          texto: 'Texto da primeira tarefa',
          completa: false 
        },
        {
          id: 2, 
          texto: 'Texto da segunda tarefa',
          completa: true
        }
      ],
      inputValue: '',
      filtro: ''
    }

  componentDidUpdate() {

  };

  componentDidMount() {

  };
// 1
  onChangeInput = (event) => {
    this.setState({inputValue: event.target.value})
  }

  criaTarefa = () => {
    let novaTarefa = {
        id: Date.now(), 
        texto: this.state.inputValue,
        completa: false,
    }

    let copiaNovaTarefa = [...this.state.tarefas, novaTarefa]
    this.setState({tarefas: copiaNovaTarefa})
    this.setState({inputValue: ""})
  }
// 2
  selectTarefa = (id) => {
    const novaListaTarefa = this.state.tarefas.map((tarefa) => {
      if (id === tarefa.id) {
        const tarefa2 = {
          ...tarefa, 
          completa: !tarefa.completa
        }
        return tarefa2;
      } else {
        return tarefa
      }

    })
    this.saveOnStorage(novaListaTarefa)
    this.setState({
      tarefa: novaListaTarefa
    })

  }

  onChangeFilter = (event) => {
    this.setState({filtro: event.target.value})

  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput} 
          type="text"/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filtro} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="completas">Completas</option>
            <option value="pendentes">Pendentes</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
