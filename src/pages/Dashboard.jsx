import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';
import fetchData from '../utils/getData'

function Dashboard({ auth0 }) {
  const [userData, setUserData] = useState(null);

  async function handleGetData() {
    if (!auth0.isAuthenticated) {
      console.log('User is not authenticated.');
      return;
    }

    try {
      let claim = await auth0.getIdTokenClaims();
      if (!claim) {
        console.log('Token claim is undefined.');
        return;
      }

      let token = claim.__raw;
      let response = await fetchData(token, '/api/goals/dashboard');
      setUserData(response);

    } catch (error) {
      console.error('Error fetching:', error);
    }
  }

  useEffect(() => {
    if (auth0.isAuthenticated) {
      handleGetData();
    }
  }, [auth0.isAuthenticated]);

  return (
    <>
      <section className='heading'>
        {userData ? <h1>Welcome {userData.name}</h1> : null}
        <h3>Goals Dashboard</h3>
        <Button variant='success' onClick={handleGetData}>Get Your Goals</Button>

        {
          Array.isArray(userData) && userData.map((d, idx) => {
            return <p key={d._id}> {d.description} </p>
          })
        }
      </section>

      <section className='content'>
        {userData && userData.length === 0 && <h3>You have not set any goals</h3>}
      </section>
    </>
  )
}

export default withAuth0(Dashboard)
