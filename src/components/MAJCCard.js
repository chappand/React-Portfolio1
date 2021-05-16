import React from "react";
// import 'bootstrap/dist/css/bootstrap.css';
import {Card, CardImg, CardBody, CardTitle, CardLink} from 'reactstrap';
import MAJCPic from "../images/MAJC.png";

function PasswordCard() {
    return(
        <div>
        <Card>
          <CardImg top width="100%" src={MAJCPic} alt="MAJC" />
          <CardBody>
            <CardTitle tag="h5">MAJC</CardTitle>
          </CardBody>
          <CardBody>
          <CardLink href="https://github.com/chappand/MAJC">Link to Repository</CardLink>
          <CardLink href="https://who-knows10120.herokuapp.com/">Link to Application</CardLink>
        </CardBody>
        </Card>
      </div>
    );
}

export default PasswordCard;