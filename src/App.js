import React, { Component } from 'react';
import './App.css';
import CardProjeto from "./Componentes/CardProjeto";
import ModalNovoProjeto from "./Componentes/ModalNovoProjeto";

class App extends Component{

  constructor(){
    super();
    this.state = {
      lista: []
    };
  }
  componentDidMount() {
    fetch("http://localhost:8080/api/projetos")
    .then(res => res.json())
      .then((result) => {
        this.setState({ lista: result.data })
      });
  }


render() {
  return (
    <>
    <div className="ui inverted fixed huge menu">
      <div className="ui container">
        <a href="index.html" className="item">Generico</a>
        <ModalNovoProjeto />
        <div className="ui icon input right menu">
          <input type="text" placeholder="procurar projeto..." />
          <i aria-hidden="true" className="search icon"></i>
        </div>
      </div>
    </div>
        
    <div className="ui stackable three column grid" id="grid-projetos">
          {
            this.state.lista.map(function (projeto) {
              return (
                <CardProjeto
                  key={projeto.id} 
                  nome={projeto.nome} 
                  usuario={projeto.usuario} 
                  descricao={projeto.descricao} 
                  likes={projeto.likes} 
                  id={projeto.id}
                />)
            })
          }
        </div>
      </>
    );
  }
}

export default App;