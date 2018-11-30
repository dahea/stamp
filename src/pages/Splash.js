import React, { Component } from 'react';
import { ChevronRight, EyeOff, Eye } from 'react-feather'

class Splash extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isPasswordVisible: false
    }
  }

  handlePasswordClick = () => {
    this.setState({isPasswordVisible: !this.state.isPasswordVisible})
  }

  render() {
    return (
      <div className="splash">
        <div className="info-text">
          <div className="title">Simple Way to Organize Your Inspirations</div>
          <div className="subtitle">I think what motivates people is not great hate,<br />but great love for other people.</div>
        </div>
        <form>
          <div className="form-title">Sign up for free</div>
          <div className="inputs-wrapper">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="E-mail" />
            <div className="input-wrapper">
              <input ref="password" type={this.state.isPasswordVisible ? 'text' : 'password'} placeholder="Password" />
              <div className="password-toggle" onClick={this.handlePasswordClick} >
                {this.state.isPasswordVisible ? <Eye /> : <EyeOff />}
              </div>
            </div>
            <button>Sign up <ChevronRight /></button>
          </div>
          <div className="tos">
            By clicking "Sign up" I agree to our<br /><a href="#" target="_blank">Terms of Service</a>.
          </div>
        </form>
      </div>
    );
  }
}

export default Splash;
