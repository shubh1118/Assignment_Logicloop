import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../Styles/UserDetails.css";

const UserDetails = () => {
  const { id } = useParams();
  const [userData, setUser] = useState(null);

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

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container-admin">
      <div className="profile">
        <img src={userData.image} alt="Profile Picture" />
        <div>
          <h1>
            {userData.firstName} {userData.lastName}
          </h1>
          <p>Age: {userData.age}</p>
          <p>Gender: {userData.gender}</p>
          <p>Email: {userData.email}</p>
          <p>Phone: {userData.phone}</p>
        </div>
      </div>
      <div className="section">
        <h2>Personal Information</h2>
        <p>Blood Group: {userData.bloodGroup}</p>
        <p>Height: {userData.height} cm</p>
        <p>Weight: {userData.weight} kg</p>
        <p>Eye Color: {userData.eyeColor}</p>
        <p>Hair Color: {userData.hair.color}</p>
      </div>
      <div className="section">
        <h2>Contact Information</h2>
        <p>
          Address: {userData.address.address}, {userData.address.city},{" "}
          {userData.address.state}, {userData.address.postalCode}
        </p>
        <p>IP: {userData.ip}</p>
        <p>MAC Address: {userData.macAddress}</p>
      </div>
      <div className="section">
        <h2>Educational Information</h2>
        <p>University: {userData.university}</p>
      </div>
      <div className="section">
        <h2>Professional Information</h2>
        <p>Company: {userData.company.name}</p>
        <p>Title: {userData.company.title}</p>
        <p>Department: {userData.company.department}</p>
      </div>
      <div className="section">
        <h2>Financial Information</h2>
        <p>Card Type: {userData.bank.cardType}</p>
        <p>Card Number: {userData.bank.cardNumber}</p>
        <p>Card Expire: {userData.bank.cardExpire}</p>
        <p>Currency: {userData.bank.currency}</p>
        <p>IBAN: {userData.bank.iban}</p>
      </div>
      <div className="section">
        <h2>Online Information</h2>
        <p>Domain: {userData.domain}</p>
        <p>User Agent: {userData.userAgent}</p>
        <p>Crypto: {userData.crypto.coin}</p>
        <p>Wallet: {userData.crypto.wallet}</p>
        <p>Network: {userData.crypto.network}</p>
      </div>
    </div>
  );
};

export default UserDetails;
