// Importando o React
import React, {Component} from "react";
// Importando os components necessários da lib react-materialize
import { Row, Table, Icon} from 'react-materialize';
import axios from 'axios'

const API_URL = 'https://api-fullstackgo.herokuapp.com/api';

class TblVari  extends Component {
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
    const rendVari = "Renda_Variavel";
    
    let filterVari = this.state.investments.filter((type) => {
      return type.type === rendVari;
    });

    let rVari = filterVari.reduce((sum, value) => {
      return sum + value.value;
    }, 0);

    this.tot ={rVari} 

    let rendim = this.state.investments.filter((type) => {
      return type.type === rendVari;
    });
    return (
        <Row>
          {this.tot.rVari === 0 && 
            <div className="addNull">
              <p className="center-align"><Icon medium>add_circle_outline</Icon></p>
              <p className="center-align">ADICIONE UM INVESTIMENTO DO TIPO RENDA VARIÁVEL!</p>
            </div>
          }
          {this.tot.rVari > 0 && 
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
                        <td><span>R$ {investment.value.toLocaleString('pt-BR', { minimumFractionDigits: 2})}</span></td>
                        <td><button onClick={(e) => this.deleteRow(investment._id, e)}><Icon>delete_forever</Icon></button></td>
                      </tr>
                    ))}
                  </tbody>
              </Table>
          }
        </Row>
        
    );
  }

}

export default TblVari;