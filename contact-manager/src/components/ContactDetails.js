import React from "react";
import blank from "../images/blank.JPG";
import { useLocation, Link } from "react-router-dom";

const ContactDetails = (props) => {
  const location = useLocation();

  const { name, email } = location.state.contact;
  return (
    <div className="main">
      <Link to={`/`}>
        <button className="ui button blue left">Back</button>
      </Link>

      <div className="ui card centered">
        <div className="image">
          <img src={blank} alt="" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
          <div className="description">{email}</div>
        </div>
      </div>
    </div>
  );
};
export default ContactDetails;
