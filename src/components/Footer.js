import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Media } from "reactstrap";

function Footer() {
    return (
        <Navbar className="fixed-bottom justify-content-center">
        <div>
            <a href="https://www.linkedin.com/in/andrew-chappell-58ba7166/">
                <Media style={{width: 20, height: 20}} object src="../../public/images/LI-In-Bug.png" /></a>
            <a href="https://github.com/chappand">
                <Media style={{width: 20, height: 20}} object src="../../public/images/GitHub-Mark-32px.png"
                />
            </a>
        </div>
        </Navbar>
    )
}
export default Footer;