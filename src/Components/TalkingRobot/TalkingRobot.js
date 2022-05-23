import React from 'react'
import './TalkingRobot.css'

const TalkingRobot = () => {

 return (
  <div className="robot">
   <div className="neck"></div>
   <div className="arms">
    <div className="arm arm_left"></div>
    <div className="arm arm_right"></div>
   </div>
   <div className="torso"></div>
   <div className="head">
    <div className="eyes">
     <div className="eyeball eyeball_left"></div>
     <div className="eyeball eyeball_right"></div>
    </div>
    <div className="mouth">
     <div className="mouth-container">
      <div className="mouth-container-line"></div>
     </div>
    </div>
   </div>
  </div>
 )
}

export default TalkingRobot; 