import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function LogoutButton(){

    const {isAuthenticated,
    logout
    } = useAuth0();

  function handleLogout(){
    logout ({ returnTo: window.location.origin});
  }
  return isAuthenticated &&
  <button onClick={handleLogout}>Log-Out</button>
}

export default LogoutButton