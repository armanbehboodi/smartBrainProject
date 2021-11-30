import React from "react";

const ImageLinkForm = (props) => {
    return (
        <div>
            <p className="fw7 f3">this magic AI can detect faces. try it!</p>
            <div>
                <input className="f4 pa2 bw0 br2 w-23 center inp" type="text" onChange={props.inputChange}/>
                <button className="fw6 f4 white grow dib w-7 link br2 bw0 ph3 pv2 bg-blue btn pointer" onClick={props.submit}>Detect</button>
            </div>
        </div>

    )
}
export default ImageLinkForm;