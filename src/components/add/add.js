//Importando o React
import React, { Component } from 'react';
import { Button, Modal} from 'react-materialize';
import axios from 'axios'

const API_URL = 'https://api-fullstackgo.herokuapp.com/api';

class Add extends Component {
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
        return (
           <Modal
                actions={[
                    <Button flat modal="close" node="button" className="btnGr">Fechar</Button>,
                    <Button flat modal="submit" node="button" className="btnYe">Adicionar</Button>
                ]}
                bottomSheet={false}
                //fixedFooter
                id="Modal-0"
                open={false}
                options={{
                    dismissible: true,
                    endingTop: '10%',
                    inDuration: 250,
                    onCloseEnd: null,
                    onCloseStart: null,
                    onOpenEnd: null,
                    onOpenStart: null,
                    opacity: 0.5,
                    outDuration: 250,
                    preventScrolling: true,
                    startingTop: '4%'
                }}
                //root={[object HTMLBodyElement]}
                trigger={
                    <div className="fixed-action-btn">
                        <a className="btn-floating btn-large light-blue accent-3" src={Add}>
                        <i className="large material-icons">add</i>
                        </a>
                    </div>
                }
                >
                <form  onSubmit={this.onSubmit}>
                    <p className="center-align tit">adicione um investimento:</p>
                    <hr className="hrBl"/>
                    <label className=" col s4">
                        Tipo:
                        <input className='padInput mbForm mtForm' type="text" placeholder="Tipo" value={this.state.type} onChange={this.onChangeType}/>
                        
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

            </Modal>
        )
    }
};

export default Add;

