import React, { Component } from 'react';
import './App.css';
import CardProjeto from "./components/CardProjeto";
import ModalNovoProjeto from "./components/ModalNovoProjeto";

class App extends Component {

  constructor() {
    super();
    this.state = { lista: [
      {nome: "Projeto Generico",
      usuario: "Midas",
      likes: 0
    }
    ] };
  }

  adicionarProjeto(projeto){
    this.setState({lista:[...this.state.lista, projeto]})
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
            <ModalNovoProjeto adicionarProjeto={this.adicionarProjeto.bind(this)} />
            <div className="ui icon input right menu">
              <input type="text" placeholder="procurar projeto..." />
              <i aria-hidden="true" className="search icon"></i>
            </div>
          </div>
        </div>
        <div className="ui stackable three column grid" id="grid-projetos">
          {
            this.state.lista.map(projeto => {
              return (
                <CardProjeto
                  key={projeto.id}
                  nome={projeto.nome} 
                  usuario={projeto.usuario} 
                  descricao={projeto.descricao} 
                  likes={projeto.likes} 
                />)
            })
          }
        </div>

      </>
    );
  }
}
export default App;
