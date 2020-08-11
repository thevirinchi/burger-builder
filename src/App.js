import React, {Component, Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import BurgerBuilder from './Containers/BurgerBuilder/BurgerBuilder';

class App extends Component {

  state = {
    navBarItems: [
      { id: 'builder', name: 'Builder', target: '/', active: true },
      { id: 'checkout', name: 'Check Out', target: '/check-out', active: false }
    ]
  }

  render(){
    return (
      <div className="App">
          <Fragment>
            <Navbar logo={logo} items={this.state.navBarItems}/>
            <BurgerBuilder/>
          </Fragment>
      </div>
    )
  }
}

export default App;
