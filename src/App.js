import React, { Component } from 'react';
import Register from './register';
import Login from './login';
import Success from './successPage';
import If from './conditional';
import update from 'immutability-helper';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      login: true,
      loginSuccess: false,
      errorText: "",
      form: {}
    }
    this.handleToggle = this.handleToggle.bind(this);
    this.setRegisterData = this.setRegisterData.bind(this);
    this.registerSubmit = this.registerSubmit.bind(this);
    this.loginSubmit = this.loginSubmit.bind(this);
    this.getLoginData = this.getLoginData.bind(this);
  }

  handleToggle(display){
    this.setState({
      login: display,
      id: "",
      password: "",
      empid: "",
      errorText: "",
      error1:"",
      regEmptyError: "",
      loginSuccess: false,
      form: {}
    })
  }
  
  setRegisterData(key, value){
    let form = update(this.state.form, {$merge: {[key]: value}});
    this.setState({
      form
    })
  }
  handleSuccessDisplayPage = (a, b)=>{
    this.setState({loginSuccess: a, login: b});
  }

  registerSubmit(){
    if(Object.values(this.state.form) && Object.values(this.state.form).length !== 5) this.setState({regEmptyError: "Fields cannot be empty"});
    else {
      this.setState({regEmptyError:""});
      if (typeof(Storage) !== "undefined"){
        localStorage.setItem(`${this.state.form.empid}`, JSON.stringify(this.state.form));
      }
      else{
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
      }
      this.setState({
        login: true
      });
    }
  }

  getLoginData(key, val){
    this.setState({
      [key]: val
    })
  }

  loginSubmit(){
    const empid = this.state.empid;
    const email = JSON.parse(localStorage.getItem(empid)) && JSON.parse(localStorage.getItem(empid)).email;
    const password = JSON.parse(localStorage.getItem(empid)) && JSON.parse(localStorage.getItem(empid)).password;
    if(!this.state.empid || !this.state.email || !this.state.password){
      if(!this.state.empid) this.setState({error1: "Fields cannot be empty"});
      if(!this.state.email) this.setState({error1: "Fields cannot be empty"});
      if(!this.state.password) this.setState({error1: "Fields cannot be empty"});
    }
    else{
      this.setState({error1:""});
      if(!localStorage.length && !email && !password){
        this.setState({errorText:"Please Register First!!"})
      }
      else if(email === this.state.id && password === this.state.password){
        this.setState({errorText:"", loginSuccess: true, login: false});
      }
      else{
        this.setState({errorText:"Id and password did not match"})
      }
    } 
  }
  
  render() {
    return (
      <div>
        <ul> 
          {/* eslint-disable-next-line */}
          <li> <a href="javascript:void(0)" onClick= {()=>this.handleToggle(true)}> Login </a> </li>
          {/* eslint-disable-next-line */}
          <li> <a href="javascript:void(0)" onClick= {()=>this.handleToggle(false)}> Sign Up </a> </li>
        </ul>
        <div>
          <div id="result"></div>
          <If condition = {this.state.loginSuccess && !this.state.login}>
            <Success  displaySuccess = {this.handleSuccessDisplayPage}/>
          </If>
          <If condition={this.state.login}> 
            <Login 
              getLoginData = {this.getLoginData}
              id = {this.state.id}
              password = {this.state.password}
              errorText = {this.state.errorText}
              loginSubmit = {this.loginSubmit}
              error1 = {this.state.error1}
              displaySuccess = {this.handleSuccessDisplayPage}
            /> 
          </If>
          <If condition={!this.state.login && !this.state.loginSuccess}>  
            <Register 
              setData = {this.setRegisterData}
              registerSubmit = {this.registerSubmit}
              form = {this.state.form}
              regEmptyError = {this.state.regEmptyError}
            />
          </If>
        </div>
      </div>
    );
  }
}
export default App;