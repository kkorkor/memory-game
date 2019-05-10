import React from "react"
import "./ImageCard.css"

const ImageCard=props =>(
    <div className="col-3">
        <div className="img-container img-size" key={props.id} onClick={() => props.handleclick(props.id)}>
            <img src={props.src}/>
           
        </div>
    </div>
)
export default ImageCard