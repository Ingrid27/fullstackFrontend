// Importando o React
import React, {Component} from "react";
// Importando o component Home
import Home from "./components/home";
// Importando os components necessários da lib react-materialize
import { Container } from 'react-materialize';

class Main extends Component {
  render(){
      return (
        <Container>
          <Home/>
        </Container>
      
      )
  }
};

export default Main;