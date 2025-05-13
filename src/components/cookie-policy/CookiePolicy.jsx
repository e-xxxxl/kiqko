import React from 'react';
import CommonLayout from "../../layouts/Common";
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Container from 'react-bootstrap/esm/Container';
import shape from '../../assets/images/shape2.png';


const CookiePolicy = () => {
    return (
        <CommonLayout>
        <section className="all-top-shape">
            <img src={shape} alt="shape" />
            <h1>COOKIE POLICY</h1>
            
        </section>

        <div className="all-container">
        <div className="all-privacy-and-others pb-5 mb-5">
            <div className="page-wrapper-all">
                <Container>


                    <Row>
                    <Col md={12} className="all-title-top mb-4 text-center">
                    <h4 className="mt-5 mb-3">Cookie Policy</h4>
                    </Col>
                        <Col md={12}>
                           <h6>Last Updated: August 28, 2021</h6> 
                           
                            
                           <h3>OVERVIEW</h3>
       
                           <p>Please read this cookie policy (“cookie policy”, "policy") carefully before using KIQKO the website (“kiqko.com”, "dating service") operated by [Double Cube] ("us", 'we", "our").</p>


<h3>What are cookies?</h3>

<p>Cookies are simple text files that are stored on your computer or mobile device by a website’s server. Each cookie is unique to your web browser. It will contain some anonymous information such as a unique identifier, website’s domain name, and some digits and numbers.</p>



<h3>What types of cookies do we use?</h3>

 <label><strong>- Necessary cookies - </strong></label>
<p>
Necessary cookies allow us to offer you the best possible experience when accessing and navigating through our website and using its features. For example, these cookies let us recognize that you have created an account and have logged into that account.</p>


 <label><strong>- Functionality cookies - </strong></label>
<p>
Functionality cookies let us operate the site in accordance with the choices you make. For example, we will recognize your username and remember how you customized the site during future visits.</p>


 <label><strong>-  Analytical cookies - </strong></label>
<p>
These cookies enable us and third-party services to collect aggregated data for statistical purposes on how our visitors use the website. These cookies do not contain personal information such as names and email addresses and are used to help us improve your user experience of the website.</p>


<h3>How to delete cookies?</h3>

<p>If you want to restrict or block the cookies that are set by our website, you can do so through your browser setting. Alternatively, you can visit www.internetcookies.org, which contains comprehensive information on how to do this on a wide variety of browsers and devices. You will find general information about cookies and details on how to delete cookies from your device.</p>


<h3>Contacting us</h3>
<p>If you have any questions about this policy or our use of cookies, send us an email at </p>
<label className="mail-p">support@kiqko.com</label>



                        </Col>
                    </Row>

                
                </Container>
            </div>
            </div>
        </div>
    </CommonLayout>

    );
};

export default CookiePolicy;