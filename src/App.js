import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{

  constructor(){
    super();
    this.state = {
      lista: []
    };
  }


render() {
  return (
    <>
    <div className="ui inverted fixed huge menu">
      <div className="ui container">
        <a href="index.html" className="item">Generico</a>
        <button className="ui primary button">criar projeto</button>
        <div className="ui icon input right menu">
          <input type="text" placeholder="procurar projeto..." />
          <i aria-hidden="true" className="search icon"></i>
        </div>
      </div>
    </div>
        
    <div class="ui card">
      <div class="image"><img src="/images/avatar/large/matthew.png" /></div>
        <div class="content">
          <div class="header">Matthew</div>
          <div class="meta"><span class="date">Joined in 2015</span></div>
          <div class="description">Matthew is a musician living in Nashville.</div>
        </div>
        <div class="extra content">
        <a>
        <i aria-hidden="true" class="user icon"></i>
      22 Friends
        </a>
      </div>
    </div>
    </>
  );
}
}
export default App;
