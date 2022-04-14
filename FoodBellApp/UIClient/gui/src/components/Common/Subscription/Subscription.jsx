import React, { useState } from 'react';
import SubscriptionTable from '../Table';
import Header from '../../Home/Header';
import {ReactSession} from 'react-client-session';

const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();
  return data;
};


const createHTTPGetContent = () => {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    // body: JSON.stringify(payload),
  };

  return options;
}

const createHTTPPostContent = (payload) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  };

  return options;
}

const Subscription = () => {
  const [customerSubcriptionDataSet, setCustomerSubcriptionDataSet] = useState(false);
  const [customerSubcriptionDatalist, setCustomerSubcriptionDatalist] = useState([]);

  var profileCheck = ReactSession.get("profile");

  if (!customerSubcriptionDataSet) {
    fetchData(
      `http://localhost:8090/subscriptions/getActiveSubscriptionByCustomerEmail/${profileCheck.profile.customerEmail}`,
      createHTTPGetContent()
    ).then((result) => {
      setCustomerSubcriptionDatalist(result);
      setCustomerSubcriptionDataSet(true);
    });
  }

  

  return (
     <div>
    <Header/>
    <div style={{marginTop: 80}}>
      {customerSubcriptionDataSet && <SubscriptionTable data={customerSubcriptionDatalist} />}
      {!customerSubcriptionDataSet && <h1>Loading......</h1>}
    </div>
    </div>
  );
}

//   return (
//     <div>
//     <Header/>
//     <div style={{marginTop: 80}}>
//      <SubscriptionTable/>
//     </div>
//     </div>
//   )
// }

export default Subscription;
