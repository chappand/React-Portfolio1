import React from "react";
// import 'bootstrap/dist/css/bootstrap.css';
import {Card, CardImg, CardBody, CardTitle, CardLink} from 'reactstrap';
import PasswordPic from "../images/Password.png";

function PasswordCard() {
    return(
        <div>
        <Card>
          <CardImg top width="100%" src={PasswordPic} alt="Password" />
          <CardBody>
            <CardTitle tag="h5">Password Generator</CardTitle>
          </CardBody>
          <CardBody>
          <CardLink href="https://github.com/chappand/Password-Generator">Link to Repository</CardLink>
          <CardLink href="https://chappand.github.io/Password-Generator/">Link to Application</CardLink>
        </CardBody>
        </Card>
      </div>
    );
}

export default PasswordCard;