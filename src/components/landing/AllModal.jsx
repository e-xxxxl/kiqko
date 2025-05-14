import { Button, Dropdown } from 'react-bootstrap';
import React, { useState } from 'react'
//import VerifyCode from './VerifyCode';
//import EmailVerified from './EmailVerified';
//import VerifyEmail from './VerifyEmail';
import Disclaimer from './Disclaimer';
//import Location from './---Location';


const AllModal = () => {
    //const [isShowCode, setIsShowCode] = useState(false);
    // const [isShowVerifyEmail, setIsShowVEmail] = useState(false);
    //const [isShowVMail, setIsShowVMail] = useState(false);
    const [isShowDisclaimer, setIsShowDisclaimer] = useState(false);
   // const [isShowLocation, setIsShowLocation] = useState(false);
    return (
        
        <div>
            {/* <div style={{margin:'70px', float:'left'}}>
            <Button onClick={() => setIsShowCode(true)}>Verify Code</Button>
            {isShowCode && <VerifyCode isShowCode={isShowCode} handleShowCode={setIsShowCode} />}
        </div> */}

        {/* <div style={{margin:'70px' , float:'left'}}>
            <Button onClick={() => setIsShowVEmail(true)}>Verify Email</Button>
            {isShowVerifyEmail && <VerifyEmail isShowVerifyEmail={isShowVerifyEmail} handleShowVEmail={setIsShowVEmail} />}
        </div> */}

        {/* <div style={{margin:'70px' , float:'left'}}>
            <Button onClick={() => setIsShowVMail(true)}>Email Verified</Button>
            {isShowVMail && <EmailVerified isShowVMail={isShowVMail} handleShowVMail={setIsShowVMail} />}
        </div> */}

        <div style={{margin:'70px' , float:'left'}}>
            <Button onClick={() => setIsShowDisclaimer(true)}>Disclaimer</Button>
            {isShowDisclaimer && <Disclaimer isShowDisclaimer={isShowDisclaimer} handleDisclaimer={setIsShowDisclaimer} />}
        </div>

        {/* <div style={{margin:'70px' , float:'left'}}>
            <Button onClick={() => setIsShowLocation(true)}>Location</Button>
            {isShowLocation && <Location isShowLocation={isShowLocation} handleLocation={setIsShowLocation} />}
        </div> */}
          
        </div>
    );
};

export default AllModal;