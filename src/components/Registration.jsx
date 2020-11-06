import React from 'react';
import '../style/registration.scss';
import { register } from '../services/userService'
import image from "../assets/account.png";

class Registration extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      password: "",
      email: "",
      confirmPassword: "",
      showLoader: false,
      placeholder_firstName: "First name",
      placeholder_lastName: "Last name",
      placeholder_email: "Email",
      placeholder_password: "Password",
      placeholder_confirmPassword: "Confirm",
    }
  }

  handlechangeall = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleLoginClick = () => {
    var path = '/login'
    this.props.history.push(path)
  }

  showoutlinelabel = () => {
    this.setState({
      placeholder_firstName: ''
    })
    document.getElementsByClassName("outline")[0].style.setProperty("display", "block")
  }

  showoutlinelabelLastName = () => {
    this.setState({
      placeholder_lastName: ''
    })
    document.getElementsByClassName("outline-lastname")[0].style.setProperty("display", "block")
  }

  showoutlinelabelEmail = () => {
    this.setState({
      placeholder_email: ''
    })
    document.getElementsByClassName("outline-email")[0].style.setProperty("display", "block")
  }

  showoutlinelabelPassword = () => {
    this.setState({
      placeholder_password: ''
    })
    document.getElementsByClassName("outline-password")[0].style.setProperty("display", "block")
  }

  showoutlinelabelConfirmPassword = () => {
    this.setState({
      placeholder_confirmPassword: ''
    })
    document.getElementsByClassName("outline-confirmpassword")[0].style.setProperty("display", "block")
  }

  handleRegisterSubmit = (event) => {
    this.setState({ showLoader: true })
    var registerData = {};
    registerData.firstName = this.state.firstName;
    registerData.lastName = this.state.lastName;
    registerData.email = this.state.email;
    registerData.password = this.state.password
    
    console.log("registered data" +registerData);
    
    let options = {
      data: registerData,
      purpose: 'register'
    }

    register(options)
      .then((response) => {
        console.log("response in register jsx: ", response);
        this.setState({ showLoader: false });
        this.setState({
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          confirmPassword: ''
        });
      })
      .catch((error) => {
        console.log("error in regster jsx: ", error);
        this.setState({ showLoader: false });
      })
  }

  render() {
    return (
      <div className="Container">
        <div className="content-div">
          <div className="content">
            <div className="title">
              <div className="f">F </div>
              <div className="u">u </div>
              <div className="nt">n </div>
              <div className="d">d </div>
              <div className="o">o </div>
              <div className="oo">o </div>
              <div className="n">N </div>
              <div className="ooo">o </div>
              <div className="t">t </div>
              <div className="e">e </div>
              <div className="s">s </div>
            </div>
            <div className="subtitle">
              Create your Fundoo Account
          </div>
          <form className="account-form">
          <div className="initials">
          <div className="nameArea">
          <div className="outline" >
          <span >First name</span></div>
                <textarea className="text-field"
                  placeholder={this.state.placeholder_firstName}
                  onClick= {this.showoutlinelabel}
                  value={this.state.firstName}
                  onChange={this.handlechangeall}
                  variant="outlined"
                  autoComplete="off">
                </textarea>
          </div>
            
          <div className="nameArea">
          <div className="outline-lastname">
          <span >Last name</span></div>
              <textarea className="text-field"
                  placeholder={this.state.placeholder_lastName}
                  onClick= {this.showoutlinelabelLastName}
                  value={this.state.lastName}
                  onChange={this.handlechangeall}
                  variant="outlined"
                  autoComplete="off"></textarea>
            </div>
            </div>
            
            <div className="emailArea">
            <div className="outline-email">
          <span >Email</span></div>
            <textarea className="text-field" 
                placeholder={this.state.placeholder_email}
                onClick= {this.showoutlinelabelEmail}
                value={this.state.email}
                onChange={this.handlechangeall}
                variant="outlined"
                autoComplete="off"></textarea>
            </div>
            <div className="initials">
              <div className="nameArea">
              <div className="outline-password">
          <span >Password</span></div>
              <textarea className="text-field"
                  placeholder={this.state.placeholder_password}
                  onClick= {this.showoutlinelabelPassword}
                  value={this.state.password}
                  onChange={this.handlechangeall}
                  variant="outlined"></textarea>
              </div>
              <div className="nameArea">
              <div className="outline-confirmpassword">
          <span >Confirm</span></div>
              <textarea className="text-field"
                  placeholder={this.state.placeholder_confirmPassword}
                  onClick= {this.showoutlinelabelConfirmPassword}
                  value={this.state.confirmPassword}
                  onChange={this.handlechangeall}
                  variant="outlined"></textarea>
              </div>
            </div>
            </form>

            <div className="submit">
              <div className="text"
                onClick={this.handleLoginClick}>
                Log in instead?
        </div>
              <button type="button"
                className="submitBtn"
                variant="contained"
                onClick={this.handleRegisterSubmit}>
                Sign In
              </button>
            </div>
          </div>
          <div className="account">
          <img className= "account-image" src={image} alt="error"/>
          </div>
        </div>
      </div>
    )
  }
}

export default Registration;