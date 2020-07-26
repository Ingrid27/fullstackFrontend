// Importando o React
import React, {Component} from "react";
// Importando os components necessários da lib react-materialize
import { Row} from 'react-materialize'
import axios from 'axios';

import {Doughnut} from 'react-chartjs-2'

const API_URL = 'https://api-fullstackgo.herokuapp.com/api';

class Contact  extends Component {
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
    let rFixa = filterFix.reduce((sum, value) => {
      return sum + value.value;
    }, 0);
    let rVari = filterVari.reduce((sum, value) => {
      return sum + value.value;
    }, 0);

    let tot = rFixa + rVari

    let perFix = (100*rFixa)/tot
    let perVari = (100*rVari)/tot


    const graph = {
        labels: [perFix.toFixed(0)+'% RENDA FIXA', perVari.toFixed(0)+'% RENDA VARIÁVEL'],
        datasets: [
          {
            label: 'Rainfall',
            backgroundColor: [
              '#ff595e',
              '#8ac926'
            ], 
            data: [rFixa, rVari]
          }
        ]
      }

    return (
      <Row>
        <div class="col m2 l2"></div>
        <div className="col s12 m8 l8">
            <Doughnut
              data={graph}
              options={{
                legend:{
                  position:'bottom',
                  labels:{
                    fontColor: '#000',
                    FontFamily: 'Oswald',
                    fontSize: 11,
                    boxWidth: 20
                  }
                },
                cutoutPercentage:75,
              }}
              
        />
        </div>
        <div class="col m2 l2"></div>
      </Row>
    )
  }
};

export default Contact;