import React from "react";
import "./FaceRecognition.css"

const FaceRecognition = ({imageUrl,box,display}) => {
    return(
        <div className="mainBox">
            <div className='absolute mt2' style={{marginTop: "5px",display: "inline-block"}}>
                <img id="faceImage" style={{width:"380px",height:"220px",display:display}} alt="image" src={imageUrl}/>
                <div style={{top: box.topRow,right:box.rightCol,bottom: box.bottomRow,left: box.leftCol}} className="bounding_box"></div>
            </div>
        </div>
    )
}
export default FaceRecognition;