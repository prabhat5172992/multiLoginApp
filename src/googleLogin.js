import React from 'react';
import { GoogleLogin } from 'react-google-login';
 

export default (props)=>{

    const responseGoogle = (response) => {
        console.log(response);
        props.displaySuccess(true, false);
    }

    return(
        <GoogleLogin
            clientId="your google-login client id goes here"
            buttonText="Login With Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
        />
    );
}