import React from "react";
import "../style/registration.scss";
import { register } from "../services/userService";
import image from "../assets/account.png";

const validEmailRegex = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

const initialState = {
  firstName: "",
  lastName: "",
  password: "",
  email: "",
  confirmPassword: "",
  firstNameError: "",
  lastNameError: "",
  passwordError: "",
  emailError: "",
  confirmPasswordError: ""
};

class Registration extends React.Component {
  state = initialState;

  handleChangeAll = (event) => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value,
    });
    event.preventDefault();
  };

  validateForm = () => {
    let firstNameError = "";
    let lastNameError = "";
    let passwordError = "";
    let emailError= "";
    let confirmPasswordError= "";

    if(!this.state.firstName) {
      firstNameError = "First Name is required!"
    }

    if(this.state.firstName.length > 0 && this.state.firstName.length < 3) {
      firstNameError = "First Name must be at least 3 characters long!"
    }

    if(!this.state.lastName) {
      lastNameError = "Last Name is required!"
    }
     
    if( this.state.lastName.length > 0 && this.state.lastName.length < 3) {
      lastNameError = "Last Name must be at least 3 characters long!"
    }

    if(!this.state.email) {
      emailError = "Email id is required!"
    }

    if( this.state.email  && !validEmailRegex.test(this.state.email)) {
      emailError = "Please enter valid email address."
    }
    
    if(!this.state.password) {
      passwordError = "Password is required!"
    }

    if( this.state.password.length > 0 && this.state.password.length < 8) {
      passwordError = "Password must be at least 8 characters long!"
    }

    if(!this.state.confirmPassword) {
      confirmPasswordError = "Password confirmation is required!"
    }

    if(this.state.confirmPassword !== this.state.password) {
      confirmPasswordError = "Password doesn't match!"
    }

    if(firstNameError || lastNameError || emailError || passwordError || confirmPasswordError) {
      this.setState({ firstNameError, lastNameError, emailError, passwordError, confirmPasswordError});
      return false;
    }

    return true;

  };

  handleRegisterSubmit = (event) => {
    event.preventDefault();
    const isValid = this.validateForm();
    if (isValid) {
      var registerData = {};
      registerData.firstName = this.state.firstName;
      registerData.lastName = this.state.lastName;
      registerData.email = this.state.email;
      registerData.password = this.state.password;

      let options = {
        data: registerData,
      };

      register(options)
        .then((response) => {
          console.log("response in register jsx: ", response);
          this.setState({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
          });
        })
        .catch((error) => {
          console.log("error in regster jsx: ", error);
        });

        //Clear form
        this.setState(initialState);
    }
  };

  render() {
    return (
      <div className="container">
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
            <div className="subtitle">Create your Fundoo Account</div>
            <form autoComplete="off">
              <div className="initials">
                <div className="all-form">
                  <input
                    className="form-control"
                    name="firstName"
                    value={this.state.firstName}
                    onChange={this.handleChangeAll}
                    required/>
                    <div className="invalid-input">{this.state.firstNameError}</div>
                  <label>First name</label>
                  <span></span>
                </div>


                <div className="all-form side-form">
                  <input
                    type="text"
                    className="form-control"
                    name="lastName"
                    value={this.state.lastName}
                    onChange={this.handleChangeAll}
                    required/>
                  <div className="invalid-input">{this.state.lastNameError}</div>
                  <label for="lastName">Last name</label>
                  <span></span>
                </div>
              </div>
               <div className="mb-4"></div>

              <div className="all-form">
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChangeAll}
                  required/>
                <div className="invalid-input">{this.state.emailError}</div>
                <label for="email">Email</label>
                <span></span>
              </div>
             <div className="mb-4"></div>

              <div className="initials">
                <div className="all-form">
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChangeAll}
                  required/>
                  <div className="invalid-input">{this.state.passwordError}</div>
                  <label for="password">Password</label>
                  <span></span>
                </div>

                <div className="all-form side-form">
                  <input
                    type="password"
                    className="form-control"
                    name="confirmPassword"
                    value={this.state.confirmPassword}
                    onChange={this.handleChangeAll}
                    required/>
                    <div className="invalid-input">{this.state.confirmPasswordError}</div>
                  <label for="confirmPassword">Confirm</label>
                  <span></span>
                </div>
              </div>
              <div className="mb-4"></div>
            </form>

            <div className="submit">
              <div className="text" onClick={this.handleLoginClick}>
                Log in instead?
              </div>
              <button
                type="submit"
                className="btn submitBtn"
                onClick={this.handleRegisterSubmit}>
                Sign In
              </button>
            </div>
          </div>
          <div className="account">
            <img className="account-image" src={image} alt="error" />
          </div>
        </div>
      </div>
    );
  }
}

export default Registration;