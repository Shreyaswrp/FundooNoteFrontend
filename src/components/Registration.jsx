import React from "react";
import "../style/registration.scss";
import { register } from "../services/userService";
import image from "../assets/account.png";

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

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
  confirmPasswordError: "",
  showLoader: false,
  active: false
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

    if(this.state.firstName.length< 3) {
      firstNameError = "First Name must be at least 3 characters long!"
    }

    if(!this.state.lastName) {
      lastNameError = "Last Name is required!"
    }
     
    if(this.state.lastName.length< 3) {
      lastNameError = "Last Name must be at least 3 characters long!"
    }

    if(!this.state.email) {
      emailError = "Email id is required!"
    }

    if(validEmailRegex.test(this.state.email)) {
      emailError = "Email id is not valid!"
    }

    if(!this.state.password) {
      passwordError = "Password is required!"
    }

    if(this.state.password.length < 8) {
      passwordError = "Password must be at least 8 characters long!"
    }

    if(!this.state.confirmPassword) {
      confirmPasswordError = "Password confirmation is required!"
    }

    if(this.state.confirmPassword == this.state.password) {
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
    console.log("88"+isValid);
    if (isValid) {
      this.setState({ showLoader: true });
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
          this.setState({ showLoader: false });
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
          this.setState({ showLoader: false });
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
            <form autocomplete="off">
              <div className="initials">
                <div className="form-group">
                  <input
                    type= "firstname"
                    class="form-control"
                    name="firstName"
                    required=""
                    value={this.state.firstName}
                    onInput={this.handleLabelHide}
                    onChange={this.handleChangeAll}
                  />
                  <label>First name</label>
                  <div className="valid-feedback">Valid.</div>
                  <div className="invalid-feedback">{this.state.firstNameError}</div>
                </div>

                <div className="form-group side-form">
                  <input
                    class="form-control"
                    name="lastName"
                    required=""
                    value={this.state.lastName}
                    onChange={this.handleChangeAll}
                  />
                  <label for="lastName">Last name</label>
                  <div class="valid-feedback">Valid.</div>
                  <div class="invalid-feedback">{this.state.lastNameError}</div>
                </div>
              </div>

              <div className="form-group">
                <input
                  class="form-control"
                  name="email"
                  required=""
                  value={this.state.email}
                  onChange={this.handleChangeAll}
                />
                <label for="email">Email</label>
                <div class="valid-feedback">Valid.</div>
                <div class="invalid-feedback">{this.state.emailError}</div>
              </div>

              <div className="initials">
                <div className="form-group">
                  <input
                    class="form-control"
                    name="password"
                    required=""
                    value={this.state.password}
                    onChange={this.handleChangeAll}
                  />
                  <label for="password">Password</label>
                  <div class="valid-feedback">Valid.</div>
                  <div class="invalid-feedback">{this.state.passwordError}</div>
                </div>

                <div className="form-group side-form">
                  <input
                    class="form-control"
                    name="confirmPassword"
                    required=""
                    value={this.state.confirmPassword}
                    onChange={this.handleChangeAll}
                  />
                  <label for="confirmPassword">Confirm</label>
                  <div class="valid-feedback">Valid.</div>
                  <div class="invalid-feedback">
                    {this.state.confirmPasswordError}
                  </div>
                </div>
              </div>
            </form>

            <div className="submit">
              <div className="text" onClick={this.handleLoginClick}>
                Log in instead?
              </div>
              <button
                type="submit"
                className="submitBtn"
                variant="contained"
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
