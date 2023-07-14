import React from "react";
import blank from "../images/blank.JPG";
import { Link } from "react-router-dom";
const ContactDetails = (props) => {
  //   const { name, email } = props.location.state.contact;
  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">
          <img src={blank} alt="" />
        </div>
        <div className="content">
          <div className="header">name</div>
          <div className="description">nmAA</div>
        </div>
      </div>
    </div>
  );
};
export default ContactDetails;
