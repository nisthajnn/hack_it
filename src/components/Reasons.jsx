import React from 'react'
import './Reasons.css';
import image1 from "../../src/assets/image1.jpg";
import image2 from "../../src/assets/image2.jpg";
import image3 from "../../src/assets/image3.jpg";
import image4 from "../../src/assets/image4.jpg";
import google from "../assets/social.png";
import microsoft from "../assets/microsoft.png";
import mcdonalds from "../assets/mcdonalds.png";
import adobe from "../assets/illustrator.png"
import tick from "../assets/tick.png";
const Reasons = () => {
  return (
    <div className='Reasons' id='reasons'>
        <div className='left-r'>
            <img src={image1} alt="" />
            <img src={image2} alt="" />
            <img src={image3} alt="" />
            {/* <img src={image4} alt="" /> */}
        </div>

        <div className='right-r'>
           
            <div>
                <span className='stroke-text'>WAYS</span>
                <span> TO PARTICIPATE</span>


            </div>
            <br />
            <div className='details-r'>
            <div>
              <img src={tick} alt="" />
              <span>ATTEND OUR EVENTS AND WORKSHOPS</span>
            </div>
            <div>
              <img src={tick} alt="" />
              <span>VOLUNTEER YOUR TIME AND SKILLSTEER YOUR TIME AND SKILLS</span>
            </div>
            <div>
              <img src={tick} alt="" />
              <span>DONATE TO SUPPORT OUR INITIATIVES</span>
            </div>
            <div>
              <img src={tick} alt="" />
              <span>FOLLOW US ON SOCIAL MEDIA AND SHARE OUR MESSAGE
</span>
            </div>
            </div>
            <br />
            <span style={{
              color : "var(--gray)",
              fontWeight:"normal",
  }}
            >OUR PARTNERS</span>
            <div className="partners">
              <img src={google} alt="" />
              <img src={mcdonalds} alt="" />
              <img src={adobe} alt="" />
              <img src={microsoft} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Reasons