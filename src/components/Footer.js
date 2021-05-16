import React from "react";
// import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Media } from "reactstrap";
import GitHubPic from "../images/GitHub-Mark-32px.png";
import LinkedInPic from "../images/LI-In-Bug.png";

function Footer() {
    return (
        <Navbar className="fixed-bottom justify-content-center">
        <div>
            <a href="https://www.linkedin.com/in/andrew-chappell-58ba7166/">
                <Media style={{width: 20, height: 20}} src={GitHubPic} /></a>
            <a href="https://github.com/chappand">
                <Media style={{width: 20, height: 20}} src={LinkedInPic}
                />
            </a>
        </div>
        </Navbar>
    )
}
export default Footer;