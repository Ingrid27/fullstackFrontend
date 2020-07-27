// Importando o React
import React, {Component}from "react";
// Importando os components necessários da lib react-materialize
import { Row, Card } from 'react-materialize';


// Recebe os parâmetros passadados para o Componenet na variável props
class Welcome extends Component {
  render() {
    return (
      <Row>
          <div className="col s1"></div>
          <div className="col s10">
            <Card className="br8">
              <div class="center-align tit"> 
                <h3>BEM VINDO</h3>
                <hr className="hrBl"/>
                <br/>
                <h5>É necessário fazer login ou cadastrar-se para entrar</h5>
                <br/>
                <h5><a href={this.props.auth.login} onClick={this.props.auth.login}>Clique aqui para entrar</a></h5>
              </div>
            </Card>            
          </div>
          <div className="col s1"></div>
        </Row>
     
    );
  }
};

export default Welcome;