import React from "react";
// import 'bootstrap/dist/css/bootstrap.css';
import { Media, Container, Row, Col } from "reactstrap";
import BitrateCard from "../components/BitrateCard";
import PasswordCard from "../components/PasswordCard";
import MAJCCard from "../components/MAJCCard";

function Projects() {
    return(
<Container className="container portfolio-custom">
    <Row>
        <Col className="col-lg-8">
            <Container>
                <Row>
                    <Col className="col-md-12 portfolio-title">
                        <h1>Portfolio</h1>
                    </Col>
                </Row>
            </Container>

            <br></br>
            <Container className="container portfolio page">
                <Row>
                    <Col className="col-md-6 portfolio-images">
                        <BitrateCard/>
                        <PasswordCard/>
                        <MAJCCard/>
                    </Col>
                </Row>
            </Container>
        </Col>
    </Row>
</Container>
    );
}

export default Projects;