import React from 'react';
import Card from '@material-ui/core/Card';
import '../css/registration.scss';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { register } from '../services/userService'
import 'react-toastify/dist/ReactToastify.min.css'
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import LinearProgress from '@material-ui/core/LinearProgress';
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
    this.state = { snackbaropen: false, snackbarmsg: '' };
    // this.state = {showLoader: false}
    // this.state = {value : ''}
  }

  snackbarClose = (event) => {
    this.setState({ snackbaropen: false })
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

    console.log("data : 36", registerData);
    let options = {
      data: registerData,
      purpose: 'register'
    }
    register(options)
      .then((response) => {
        console.log("response in register jsx: ", response);
        this.setState({ snackbaropen: true, snackbarmsg: "Registration successful , check your email" });
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
        this.setState({ snackbaropen: true, snackbarmsg: error.message });
        this.setState({ showLoader: false });
      })
  }

  render() {
    return (
      <Card className="card">
        <div className="progress">
          {this.state.showLoader ? <LinearProgress /> : null
          }

        </div>
        <div className="content-div">
          <Snackbar
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            open={this.state.snackbaropen}
            autoHideDuration={3000}
            onClose={this.snackbarClose}

            message={<span id="message-id">
              {this.state.snackbarmsg}
            </span>}
            action={[
              <IconButton
                key="close"
                arial-label="Close"
                color="inherit"
                onClick={this.snackbarClose}
              >
                x
       </IconButton>
            ]}
          />
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
                <TextField
                  id="outlined-basic"
                  className="textField"
                  label="First Name"
                  name="firstName"
                  margin="normal"
                  value={this.state.firstName}
                  onChange={this.handlechangeall}
                  variant="outlined"
                />
              </div>
              <div className="nameArea">
                <TextField
                  id="outlined-basic"
                  className="textField"
                  label="Last Name"
                  name="lastName"
                  margin="normal"
                  value={this.state.lastName}
                  onChange={this.handlechangeall}
                  variant="outlined"
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="emailArea">
              <TextField
                id="outlined-basic"
                className="textField3"
                label="Email"
                name="email"
                margin="normal"
                value={this.state.email}
                onChange={this.handlechangeall}
                variant="outlined"
                autoComplete="off"
              />
            </div>
            <div className="initials">
              <div className="nameArea">
                <TextField
                  id="outlined-basic"
                  className="textField"
                  label="Password"
                  name="password"
                  margin="normal"
                  value={this.state.password}
                  onChange={this.handlechangeall}
                  variant="outlined"
                />
              </div>
              <div className="nameArea">
                <TextField
                  id="outlined-basic"
                  className="textField"
                  label="Confirm Password"
                  name="confirmPassword"
                  margin="normal"
                  value={this.state.confirmPassword}
                  onChange={this.handlechangeall}
                  variant="outlined"
                />
              </div>
            </div>

            <div className="submit">
              <div className="text"
                onClick={this.handleLoginClick}>
                Log in instead?
        </div>
              <Button
                className="submitBtn"
                variant="contained"
                onClick={this.handleRegisterSubmit}
              >
                Sign In
      </Button>
            </div>
          </div>
          <div className="account">
          <img src={image} alt="error"/>
          </div>
        </div>
      </Card>
    )
  }
}

export default Registration;