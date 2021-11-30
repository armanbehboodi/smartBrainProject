import React from "react";
import Tilt from 'react-tilt'

const Logo = () => {
    return (
        <div className="ma4 mt0 mb0">
            <Tilt className="br2 shadow-1 Tilt" options={{ max : 25 }} style={{ height: 100, width: 100 }} >
                <div className="Tilt-inner pa3">
                    <img style={{paddingTop: "5px"}} src="https://img.icons8.com/external-tulpahn-outline-color-tulpahn/50/000000/external-robot-robot-tulpahn-outline-color-tulpahn-1.png"/>
                </div>
            </Tilt>
        </div>
    );
}
export default Logo;