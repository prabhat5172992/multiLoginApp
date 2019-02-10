import React from 'react';
import Logout from './googleLogout';

const Success = (props)=>{
    return(
        <div>
            <div style={{textAlign: "center", marginTop: "30px", backgroundColor: "#E4E8E8", width:"100%"}}>
                <div style={{isplay: "inline-block", padding: "20px"}}><h2> You have successfully Logged In!! </h2> </div>
            </div>
            <br />
            <div style={{textAlign: "center"}}> <Logout displaySuccess = {props.displaySuccess}/> </div>
        </div>
    );
}

export default Success;