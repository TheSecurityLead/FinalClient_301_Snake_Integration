import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';
import getData from '../utils/getData'

function Dashboard({ auth0 }) {
  const [data, setData] = useState(null)
  const [userData, setUserData] = useState(auth0.user || null)
  // const navigate = useNavigate()
  // const dispatch = useDispatch()

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
      let response = await getData.fetch(token, '/api/goals/dashboard');
      setData(response);

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
          data ? data.map((d, idx) => {
            return <p key={d._id}> {d.description} </p>
          }) : null
        }

      </section>

      <section className='content'>
        <h3>You have not set any goals</h3>
      </section>
    </>
  )
}

export default withAuth0(Dashboard)