import React from 'react';

const UserProfile = ({ user, purchaseHistory, lendingHistory }) => {
  return (
    <div>
      <h2>User Profile</h2>
      <h3>{user.name}</h3>
      <h4>Email: {user.email}</h4>

      <h3>Purchase History</h3>
      <ul>
        {purchaseHistory.map((purchase) => (
          <li key={purchase.id}>{purchase.title} - ${purchase.price}</li>
        ))}
      </ul>

      <h3>Lending History</h3>
      <ul>
        {lendingHistory.map((lend) => (
          <li key={lend.id}>{lend.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserProfile;
