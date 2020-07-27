// Importando o React
import React, { Component } from "react";
// Importando os components necessários da lib react-materialize
import { Navbar, Row, Icon} from 'react-materialize';

import logo from '../images/logo.png'

class Header extends Component {
  render (){
    return (
      <Row>  
        <Navbar
          className="flow-text"
          alignLinks="right"
        brand={<a className="brand-logo light-blue-text text-accent-3" style={{display:'flex'}} href="/"><img src={logo} alt="Logo"></img><b className="desk">MINHA CARTEIRA</b></a>}
          id="mobile-nav"
          menuIcon={<Icon>menu</Icon>}
          options={{
            draggable: true,
            edge: 'left',
            inDuration: 250,
            onCloseEnd: null,
            onCloseStart: null,
            onOpenEnd: null,
            onOpenStart: null,
            outDuration: 200,
            preventScrolling: true
          }}
          sidenav={<li>Custom node!</li>}
        >
          {!this.props.auth.isAuthenticated() &&
            <a className="fRight pl10 desk" href={this.props.auth.login} onClick={this.props.auth.login}>LOGIN</a>
          }
          {this.props.auth.isAuthenticated() &&
          <a className="fRight pl10 desk" href={this.props.auth.login} onClick={this.props.auth.logout}>
            SAIR
          </a>
          }
          {this.props.auth.isAuthenticated() &&
            <div className="quad fRight desk">
                <Icon class="material-icons">account_circle</Icon>
                <span>{this.props.name}</span>
            </div>
          }
          {this.props.auth.isAuthenticated() &&
            <div className="quad fRight mob">
                <Icon className="large material-icons perf mob">account_circle</Icon>
                <span>{this.props.name}</span>
                <hr/>
            </div>
          }
          <div className="col s3"></div>
          <div className="col s6 mob">
          {!this.props.auth.isAuthenticated() &&
            <a className="waves-effect waves-light btnYe mt20" href={this.props.auth.login} onClick={this.props.auth.login}>LOGIN</a>
          }
          {this.props.auth.isAuthenticated() &&
            <a waves="light" className= "waves-effect waves-light btnYe" href={this.props.auth.login}  onClick={this.props.auth.logout}>SAIR</a>
          }
        </div>
        <div className="col s3"></div>
          
        </Navbar>
      </Row>
    );
  }
}

export default Header;
