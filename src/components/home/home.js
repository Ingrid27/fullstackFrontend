// Importando o React
import React, {Component} from "react";
// Importando os components necessários da lib react-materialize
import { Row, Card} from 'react-materialize';
import axios from 'axios';


import ChartsPage from '../graph/graph';
import Forms from "../forms/form";
import TblFix from "../tables/tableFix";
import TblVari from "../tables/tableVari";

const API_URL = 'https://api-fullstackgo.herokuapp.com/api';

class Home  extends Component {
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
  render () {
    const rendFix = "Renda_Fixa";
    const rendVari = "Renda_Variavel";
    let filterFix = this.state.investments.filter((type) => {
      return type.type === rendFix;
    });
    let filterVari = this.state.investments.filter((type) => {
      return type.type === rendVari;
    });
    var calcFix = filterFix.reduce((sum, value) => {
      return sum + value.value;
    }, 0);
    var calcVari = filterVari.reduce((sum, value) => {
      return sum + value.value;
    }, 0);
    let tot = calcFix + calcVari;

    return (
      <Row>
          <div class="col s12">
            <Card className="br8">
              <div>
                <Forms/>
              </div>
            </Card>
          </div>
          <div class="col s12">
          <Card className="br8">
              <div>
                <p className="center-align tit mb18">SEUS INVESTIMENTOS</p>
                <hr className="hrBl"/>
                <ChartsPage />
                <hr className="hrBl"/>
                <p className="tit">TOTAL INVESTIDO: R$ <span>{tot.toLocaleString('pt-BR', { minimumFractionDigits: 2})}</span></p>
              </div>
            </Card>
          </div>
          <div class="col s12 m6">
          <Card className="br8">
              <div>
                <p className="center-align tit"><span>RENDA FIXA</span></p>
                <hr className="rendF"/>
                <TblFix/>
                <hr className="rendF"/>
                <p className="tit">TOTAL: R$ <span>{calcFix.toLocaleString('pt-BR', { minimumFractionDigits: 2})}</span></p>
              </div>
          </Card>
          </div>
          <div class="col s12 m6">
          <Card className="br8">
            <div>
              <p className="center-align tit"><span>RENDA VARIÁVEL</span></p>
              <hr className="rendV"/>
              <TblVari/>
              <hr className="rendV"/>
              <p className="tit">TOTAL: R$ <span>{calcVari.toLocaleString('pt-BR', { minimumFractionDigits: 2})}</span></p>
            </div>
          </Card>
          </div>
      </Row>
    );
  }
};

export default Home;