
import React from 'react';
import './App.css';
import Etapa1 from './Components/Etapa1'
import Etapa2 from './Components/Etapa2'
import Etapa3 from './Components/Etapa3'
import Final from './Components/Final'

class App extends React.Component{
  render () {
  return (
    <div className="App">
      <Etapa1/>
      <Etapa2/>
      <Etapa3/>
      <Final/>
      
    </div>
  );
}
}

export default App;
