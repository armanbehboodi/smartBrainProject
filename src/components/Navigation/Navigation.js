import React from "react";

const Navigation = (props) => {
    return(
        <nav style={{display: "flex",justifyContent: "flex-end",opacity:props.opacity}}>
            <p id="navText" className="fw7 f3 dim link black underline pa3 pointer" onClick={props.signIn}>Sign Out</p>
        </nav>
    );
}
export default Navigation;