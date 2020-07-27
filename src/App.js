// Importando o React
import React, { Component } from 'react';
import Header from './components/header';
import Main from './main';
import Welcome from './components/welcome';
import NotFount from './components/notFound';
import Callback from './components/callback';

class App extends Component {
  render() {
    let mainComponent = "";
    switch (this.props.location) {
      case "":
        mainComponent = !this.props.auth.isAuthenticated() ? <Welcome {...this.props}/> : <Main/>;
        break;
      case "callback":
        mainComponent = <Callback/>;
        break;
      case "home":
        mainComponent = this.props.auth.isAuthenticated() ? <Main {...this.props}/> : <Welcome/>;
        break;
      default:
        mainComponent = <NotFount/>
    }
    return (
      <div>
        <Header {...this.props}/>
          
        {mainComponent}
      </div>
    );
  }
}

export default App;