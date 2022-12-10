import React from "react";
import Kitchen from "./Kitchen"
import LivingRoom from "./LivingRoom"
import Bedroom1 from "./Bedroom1"
import Bathroom from "./Bathroom"

const FloorPlan = (props) => {
    return (
        <div id="FloorPlan">
            <Bedroom1 classname='bedroom' bednum={1}/>
            <LivingRoom/>
            <Kitchen/>
            <Bathroom/>
        </div>
    )
}

export default FloorPlan