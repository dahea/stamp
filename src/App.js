import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Splash from './pages/Splash';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isMobileNavVisible: false
    }
  }

  handleNavToggleClick = () => {
    this.setState({isMobileNavVisible: !this.state.isMobileNavVisible})
  }

  render() {
    return (
      <div className={`App ${this.state.isMobileNavVisible ? 'show-nav' : ''}`} >
        <Header handleNavToggleClick={this.handleNavToggleClick} isMobileNavVisible={this.state.isMobileNavVisible} />
        <Splash />
        <Footer />
      </div>
    );
  }
}

export default App;
