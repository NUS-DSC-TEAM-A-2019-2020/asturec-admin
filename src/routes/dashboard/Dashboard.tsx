import React from 'react';
import { useUser } from 'contexts/UserContext';
import firebase from 'utils/firebase';

const Dashboard = () => {
  const { user } = useUser();
  const { uid } = user;
  const logout = () => {
    firebase.auth().signOut();
  };
  return (
    <div>
      <div>Welcome back, user {uid}</div>
      <button type="button" className="button" onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
