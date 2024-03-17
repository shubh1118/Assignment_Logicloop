import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../Styles/UserDetails.css";

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/users/${id}`);
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, [id]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="parent-containerA">
      <div className="cardA">
        <div className="card-info">
          <div style={{ padding: "20px" }} id="name">
            <h1>{`${user.firstName} ${user.lastName}`}</h1>
            <div id="emailA">
              <strong>Email :</strong> {user.email}
            </div>
            <div id="phoneA">
              <strong>Phone :</strong> {user.phone}
            </div>
            <div id="addressA">
              <strong>Address :</strong> {user.address.city},{" "}
              {user.address.country}
            </div>
            <div id="companyA">
              <strong>Company :</strong> {user.company.name}
            </div>
            <div id="postalcodeA">
              <strong>PostalCode :</strong> {user.address.postalCode}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
