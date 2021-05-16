import React from "react";
// import 'bootstrap/dist/css/bootstrap.css';
import {Card, CardImg, CardBody, CardTitle, CardLink} from 'reactstrap';
import BitratePic from "../images/Bitrate.png";

function BitrateCard() {
    return(
        <div>
        <Card>
          <CardImg top width="100%" src={BitratePic} alt="Bitrate" />
          <CardBody>
            <CardTitle tag="h5">Bitrate</CardTitle>
          </CardBody>
          <CardBody>
          <CardLink href="https://github.com/chappand/Bitcoin-Curreny-Converter">Link to Repository</CardLink>
          <CardLink href="https://chappand.github.io/Bitcoin-Curreny-Converter/">Link to Application</CardLink>
        </CardBody>
        </Card>
      </div>
    );
}

export default BitrateCard;