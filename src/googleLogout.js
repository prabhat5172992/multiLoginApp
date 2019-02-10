import React from 'react';
import { GoogleLogout } from 'react-google-login';

export default (props) => {

    const logout = (response) => {
        console.log("Logout", response);
        props.displaySuccess(false, true);
    }

    return(
        <GoogleLogout
            buttonText="Logout"
            onLogoutSuccess={logout}
        />
    )
}