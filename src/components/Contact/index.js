import { CiLinkedin, CiFacebook, CiTwitter } from "react-icons/ci";

import "./index.css";

const Contact = () => (
  <div className="container">
    <h1 className="head">SEND ME A MESSAGE!</h1>
    <div className="sub">
      <div className="mini">
        <h4>Getting in touch is easy!</h4>
        <p>+91 8886822333</p>
        <p>Email : evramesh88888@gmail.com</p>
        <CiLinkedin size={25} />
        <CiFacebook size={25} />
        <CiTwitter size={25} />
      </div>
      <div className="mini-1">
        <input className="input" placeholder="Your Name" />
        <input className="input" placeholder="Email" />
        <textarea
          className="input"
          placeholder="Write us about any project. We'd love to work with you."
        />
        <button className="btn-2" type="button">Send</button>
      </div>
    </div>
  </div>
);

export default Contact;
