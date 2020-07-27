// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Card } from 'react-materialize';

// Recebe os parâmetros passadados para o Componenet na variável props
const NotFound = (props) => (
  <Card>
      <Row>
        <div>
            não encontrado
        </div>
      </Row>
  </Card>
);

export default NotFound;