import React from "react";
import './Modal.css'

const About = () => {
    return ( 
        <div>
            <div className="modal">
                <div className="modal-content">
                        <h3> Hello, this is an amzing modal</h3>
                </div>
            </div>

            <div className="ui raised padded text container segment" style={{marginTop:'80px'}}>
                <h3 className="ui header"> About </h3>
                <p>Next Door Tax was established to help customers get their taxes done from the comfort of their home. We can prepare your taxes virtually and by phone. The idea of Next Door Tax was born 7 years ago. Due Covid -19, we were able to bring it to life so that customers can get their taxes done from the safety of their homes. We strive to give you the best quality service and convenience!
                    Please book your appointment on our website today. 
                    You can also call us and leave a message and one of our available staff members will contact you in 48 hours.</p>
            </div>
        
        </div>
     );
}

 
export default About;