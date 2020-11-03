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
      showLoader: false
    }
  }

  handlechangeall = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleLoginClick = () => {
    var path = '/login'
    this.props.history.push(path)
  }
  
  handleRegisterSubmit = (event) => {
    this.setState({ showLoader: true })
    var registerData = {};
    registerData.firstName = this.state.firstName;
    registerData.lastName = this.state.lastName;
    registerData.email = this.state.email;
    registerData.password = this.state.password
    
    console.log(registerData);
    
    let options = {
      data: registerData,
      purpose: 'register'
    }

    register(options)
      .then((response) => {
      }).then((response) => {
        response.map(response1 => response1)
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
        <div className="progress">
          {this.state.showLoader ? <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div> : null
          }

        </div>
        <div className="content-div">
        <div id="snackbar">
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            open={this.state.snackbaropen}
            autoHideDuration={3000}
            onClose={this.snackbarClose}

            message={<span id="message-id">
              {this.state.snackbarmsg}
            </span>}
            action={[
              <button type="button" className="btn btn-primary px-3"><i
                key="close"
                arial-label="Close"
                color="inherit"
                onClick={this.snackbarClose}
              >
                x
                </i></button>
            ]}
          </div>
          <div className="content">
            <div className="title">
              <div className="f">F </div>
              <div className="u">u </div>
              <div className="n">n </div>
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
            <div className="initials">
              <div className="nameArea">
                <textarea>
                  id="outlined-basic"
                  className="textField"
                  label="First Name"
                  name="firstName"
                  margin="normal"
                  value={this.state.firstName}
                  onChange={this.handlechangeall}
                  variant="outlined"
                </textarea>
              </div>
              <div className="nameArea">
              <textarea>
                  id="outlined-basic"
                  className="textField"
                  label="Last Name"
                  name="lastName"
                  margin="normal"
                  value={this.state.lastName}
                  onChange={this.handlechangeall}
                  variant="outlined"
                  autoComplete="off"
                  </textarea>
              </div>
            </div>
            <div className="emailArea">
            <textarea>
                id="outlined-basic"
                className="textField3"
                label="Email"
                name="email"
                margin="normal"
                value={this.state.email}
                onChange={this.handlechangeall}
                variant="outlined"
                autoComplete="off"
                </textarea>
            </div>
            <div className="initials">
              <div className="nameArea">
              <textarea>
                  id="outlined-basic"
                  className="textField"
                  label="Password"
                  name="password"
                  margin="normal"
                  value={this.state.password}
                  onChange={this.handlechangeall}
                  variant="outlined"
                  </textarea>
              </div>
              <div className="nameArea">
              <textarea>
                  id="outlined-basic"
                  className="textField"
                  label="Confirm Password"
                  name="confirmPassword"
                  margin="normal"
                  value={this.state.confirmPassword}
                  onChange={this.handlechangeall}
                  variant="outlined"
                  </textarea>
              </div>
            </div>

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
          <img src={image} alt="error"/>
          </div>
        </div>
      </div>
    )
  }
}

export default Registration;