// Importando o React
import React, {Component} from "react";
// Importando os components necessários da lib react-materialize
import { Row, Table} from 'react-materialize';
import axios from 'axios'

const API_URL = 'https://api-fullstackgo.herokuapp.com/api';

class TblFix  extends Component {
     state = {
      investments: []
    }
    componentDidMount() {
      const url = `${API_URL}/details/`;
      axios.get(url).then(response => response.data)
      .then((data) => {
        this.setState({ investments: data })
        console.log(this.state.investments)
      });
    }
    deleteRow(_id, e){
      axios.delete(`https://api-fullstackgo.herokuapp.com/api/interest/${_id}`)
        .then(res => {
          console.log(res);
          console.log(res.data);
          window.location.reload()
        });
    }
  
  
  render () {
    const rendFix = "Renda_Fixa";
    let rendim = this.state.investments.filter((type) => {
      return type.type === rendFix;
    });
    return (
        <Row>
          <Table className="highlight centered">
                <thead>
                  <tr>
                      <th>Data</th>
                      <th>Valor</th>
                      <th>Excluir</th>
                  </tr>
                </thead>
                <tbody>
                  {rendim.map((investment) => (
                    <tr>
                      <td><span>{investment.date}</span></td>
                      <td><span>R$ {investment.value}</span></td>
                      <td><a onClick={(e) => this.deleteRow(investment._id, e)}>X</a></td>
                    </tr>
                  ))}
                </tbody>
            </Table>
        </Row>
        
    );
  }

}

export default TblFix;