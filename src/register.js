import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const Register = (props)=>{

    const style = {textStyle:{width:"300px"}}
    return (
        <div style={{textAlign: "center", width: "100%", marginTop: "10px"}}>
            <div style={{display: "inline-block", boxSizing: "border-box", border: "2px solid #C8CACA", padding: "10px", height: "510px"}}>
                <MuiThemeProvider>
                    <div style={{textAlign: "center", fontSize: "1.2rem", backgroundColor: "#12C4F3", color: "#FBFCFC", padding: "10px"}}>SIGN UP</div>
                    <TextField
                        floatingLabelFixed
                        floatingLabelText= "Emp ID"
                        style = {style.textStyle}
                        onChange = {(_, empid) => props.setData("empid", empid)}
                        value = {props.form.empid}
                    />
                    <br/>
                    <TextField
                        floatingLabelFixed
                        floatingLabelText= "First Name"
                        style = {style.textStyle}
                        onChange = {(_, Fname) => props.setData("fname", Fname)}
                        value = {props.form.fname}
                    />
                    <br/>
                    <TextField
                        floatingLabelFixed
                        floatingLabelText= "Last Name"
                        style = {style.textStyle}
                        onChange = {(_, Lname) => props.setData("lname", Lname)}
                        value = {props.form.lname}
                    />
                    <br/>
                    <TextField
                        floatingLabelFixed
                        floatingLabelText= "Email ID"
                        style = {style.textStyle}
                        onChange = {(_, email) => props.setData("email", email)}
                        value = {props.form.email}
                    />
                    <br/>
                    <TextField
                        floatingLabelFixed
                        type = "password"
                        floatingLabelText="Password"
                        style = {style.textStyle}
                        onChange = {(_, password) => props.setData("password", password)}
                        errorText = {props.regEmptyError ? props.regEmptyError : ""}
                        value = {props.form.password}
                        errorStyle = {{marginLeft:"-175px"}}
                    />
                    <br/>
                    <RaisedButton label="Submit" style = {{marginTop: `${props.regEmptyError ? "5px" : "25px"}`}} primary={true} onClick={() => props.registerSubmit()}/>
                </MuiThemeProvider>
            </div>
        </div>
    );
}

export default Register;