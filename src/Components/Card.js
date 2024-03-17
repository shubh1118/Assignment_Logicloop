import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faBirthdayCake,
} from "@fortawesome/free-solid-svg-icons";

const Card = ({ user }) => {
  const cardStyle = {};

  return (
    <Link to={`/user/${user.id}`} style={{ textDecoration: "none" }}>
      <div className="container">
        <div id="img1">
          <img className="photo" src={user.image} alt="" />
        </div>

        <div
          className="OneR"
          style={{
            backgroundColor: user.gender === "male" ? "#5DADE8" : "#FE8DF9",
          }}
        >
          <div id="FLname">
            <b>{`${user.firstName} ${user.lastName}`}</b>
          </div>
          <div id="city">
            {" "}
            <FontAwesomeIcon id="ct" icon={faMapMarkerAlt} />
            <span>{user.address.city}</span>
          </div>
          <div id="birthdate">
            {" "}
            <FontAwesomeIcon id="bd" icon={faBirthdayCake} />
            <span>{user.birthDate}</span>
          </div>
        </div>

        <div id="title">
          <span>{user.company.title}</span>
        </div>

        <div className="email-phone">
          <div>
            <FontAwesomeIcon id="phone" icon={faPhone} />
            <span>{user.phone}</span>
          </div>
          <div>
            <FontAwesomeIcon id="email" icon={faEnvelope} />
            <span>{user.email}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
