// Importando o React
import React, {Component} from "react";
// Importando os components necessários da lib react-materialize
import { Row} from 'react-materialize';

import axios from 'axios';

class Forms  extends Component {
    constructor(props) {
        super(props)

        this.onChangeType = this.onChangeType.bind(this);
        this.onChangevalue = this.onChangevalue.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            type: '',
            value: '',
            date: ''
        }
    }

    onChangeType(e) {
        this.setState({ type: e.target.value })
    }

    onChangevalue(e) {
        this.setState({ value: e.target.value })
    }

    onChangeDate(e) {
        this.setState({ date: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const userObject = {
            type: this.state.type,
            value: this.state.value,
            date: this.state.date
        };
        
        axios.post('https://api-fullstackgo.herokuapp.com/api/interest', userObject)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });

        this.setState({ type: '', value: '', date: '' })
    }




    render() {
        return(
            <Row>
                <form  onSubmit={this.onSubmit}>
                    <p className="center-align tit">adicione um investimento:</p>
                    <hr className="hrBl"/>
                    <label className=" col s4">
                        Tipo:
                    <select className="browser-default mbForm mtForm" value={this.state.type} onChange={this.onChangeType}>
                        <option value="" disabled selected>Selecione</option>
                        <option value="Renda_Fixa" >Renda Fixa</option>
                        <option value="Renda_Variavel" >Renda Variável</option>
                    </select>                        
                    </label>
                    <label className=" col s4">
                        Valor:
                        <input className='padInput mbForm mtForm' type="number" placeholder="Valor" value={this.state.value} onChange={this.onChangevalue}/>
                    </label>
                    <label className=" col s4">
                        Data:
                        <input className='padInput mtForm' type="date" value={this.state.date} onChange={this.onChangeDate}/>
                    </label>
                    <div className="col m12 l12 s12">
                        <div className="col m5 l5 s4"></div>
                        <div className="col m2 l2 s4">
                            <button className="btnYe" type="submit" value="Create User" onClick={this.onSubmit}>ADICIONAR</button>
                        </div>
                        <div className="col m5 l5 s4"></div>
                    </div>
                </form>
                
            </Row>
        )
    }
};

export default Forms;