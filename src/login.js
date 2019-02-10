import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import GoogleLogin from './googleLogin';

const Login = (props)=>{
    const style = {textStyle:{width:"300px"}}
    return (
        <div style={{textAlign: "center", width: "100%", marginTop: `${(props.errorText || props.error1) ? '40px' : '30px'}`}}>
            <div style={{display: "inline-block", boxSizing: "border-box", border: "2px solid #C8CACA", padding: "10px", height: `${(props.errorText || props.error1) ? '400px ': '380px'}`}}>
                <div style={{textAlign: "center", fontSize: "1.2rem", backgroundColor: "#12C4F3", color: "#FBFCFC", padding: "10px"}}>LOGIN</div>
                <MuiThemeProvider>
                    <div style={{marginTop: "10px"}}>
                        <TextField
                            floatingLabelFixed
                            floatingLabelText="Emp ID"
                            style = {style.textStyle}
                            onChange = {(_, empid) => props.getLoginData("empid", empid)}
                            value={props.empid}
                        />
                        <br/>
                        <TextField
                            floatingLabelFixed
                            floatingLabelText="Email"
                            style = {style.textStyle}
                            onChange = {(_, email) => props.getLoginData("email", email)}
                            value={props.id}
                        />
                        <br/>
                        <TextField
                            floatingLabelFixed
                            type = "password"
                            floatingLabelText="Password"
                            style = {style.textStyle}
                            onChange = {(_, Password) => props.getLoginData("password", Password)}
                            value = {props.password}
                            errorText= {props.errorText || props.error1}
                            errorStyle = {{marginLeft:"-175px"}}
                        />
                        <br/>
                        <RaisedButton label="Submit" style = {{marginTop: `${(props.errorText || props.error1) ? '20px': '30px'}`} } primary={true} onClick={() => props.loginSubmit()}/>
                        <br />
                    </div>
                </MuiThemeProvider>
                <div style={{marginTop: "35px"}}> <GoogleLogin displaySuccess = {props.displaySuccess}/> </div>
            </div>
        </div>
    );
};

export default Login;