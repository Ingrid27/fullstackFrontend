// Importando o React
import React, { Component } from "react";
// Importando os components necessários da lib react-materialize
import { Row, Card, Col, ProgressBar} from 'react-materialize';
import Auth from "../Auth";

// Recebe os parâmetros passadados para o Componenet na variável props
class callback extends Component {
  componentDidMount() {
    const auth = new Auth();
    auth.handleAuthentication();
  }
  render() {
    return (
      <Row>
        <div className="col s2"></div>
        <div className="col s8">
        <Card>
          <div class="center-align tit">
            <br/>
            <p>Loading...</p>
            <Col s={1} m={3}/>
            <Col s={10} m={6}>
              <ProgressBar />
            </Col>
            <Col s={1} m={3}/>
            <br/>
          </div>
        </Card>
        </div>
        <div className="col s2"></div>
      </Row>
    )
  }
};

export default callback;