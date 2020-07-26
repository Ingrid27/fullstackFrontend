// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Navbar, Row, Icon} from 'react-materialize';

import logo from '../../images/logo.png'

const Header = (props) => (
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
      <a className="fRight pl10 desk" href="/">
        SAIR
      </a>
      <div className="quad fRight desk">
          <i class="material-icons">account_circle</i>
          <span>{props.name}</span>
      </div>
      <div className="quad fRight mob">
          <i className="large material-icons perf mob">account_circle</i>
          <span>{props.name}</span>
          <hr/>
      </div>
      <div className="col s3"></div>
      <div className="col s6 mob">
        <a waves="light" className= "waves-effect waves-light btnYe" href="/">SAIR</a>
      </div>
      <div className="col s3"></div>

    </Navbar>
  </Row>
);

export default Header;
