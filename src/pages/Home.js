import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Media, Container, Row, Col } from "reactstrap";
import ProPic from "../images/IMG_0264.jpg";
import Footer from "../components/Footer";


function Home() {
    return (
        <div>
            <Container className="padding-top">
                <Row>
                    <Col className="md-3">
                        <img style={{ height: 400, witdth: 400 }} src={ProPic} alt="Profile Picture" />
                    </Col>
                    <Col className="md-9">
                        <p>
                            I have a Bachelor's Degree in Accounting from Northwood University, but have expanded my skills into new spaces. After spending a few years in the Accounting world, I realised that my passion was not in that industry, but elsewhere. Luckily I was given an opportunity in the Systems/IT space and I learned that I love it.
                           </p>
                           <p>
                           After working in the Systems/IT space for a few years I realised I thirsted for more knowledge. I then took a course with MSU to get my certificate in Full-Stack Web Development. With this new experience and these new skills, I am happy to say that I have left Accounting in my rearview!
                           </p>
                           <a href="Assets/Images/AndrewChappell_2020new.pdf" download>Download my resume!</a>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );


}

export default Home;