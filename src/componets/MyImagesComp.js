import React from "react";
import picone from '../Assests/1.jpg';
import pictwo from '../Assests/2.jpg';
import commData from "../shared/constant/constantData";

const MyImagesComp = () =>{
    return(
        <div>
            <h2>this is myimages components</h2>
            <img src={picone} alt='cricket' height="200px" width="200px"></img>
            <img src={pictwo} alt='cricket' height="200px" width="200px"></img>
            <hr/>
            <img src={commData.picone} alt='cricket' height="200px" width="200px"></img>
            <img src={commData.pictwo} alt='cricket' height="200px" width="200px"></img>
        </div>

    )
}

export default MyImagesComp