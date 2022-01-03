import React from "react";
import { Link} from "react-router-dom";
import Modal from "../Modal";

const Contact = () => {
    return ( 
        <div>
            <Modal/>
            <div className="ui raised padded text container segment" style={{marginTop:'80px'}}>
                <h3 className="ui header"> Contact </h3>
                <p>ADDRESS Washington EMAIL nextdoor@info.com PHONE +1 (703) 380-3280</p>
          </div>
        </div>
        
     );
}

 
export default Contact;