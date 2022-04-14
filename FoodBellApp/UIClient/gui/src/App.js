import React,{useState} from 'react';
import LoginPage from './components/loginPage';
import {ReactSession} from 'react-client-session';


import CustomerProfileSkipPage from './components/CustomerProfileSkipPage';
import { Route,Routes } from 'react-router-dom';
import CustomerDashboard from './components/CustomerDashboard';
import VendorDashboard from './components/VendorDashboard';
import Subscription from './components/Common/Subscription/Subscription';
import SignUpPage from './components/SignUpPage';
import LogOut from './components/Common/LogOut';
import VendorProfileSkip from './components/VendorProfileSkipPage';
import VendorSignUpPage from './components/VendorSignUpPage';
import ActiveVendorSubscription from './components/ActiveSubscriptions';


export default function App() {
 

  var profileCheck = ReactSession.get("profile");
   console.log(profileCheck);
  if (profileCheck != null) {
                if (profileCheck.profileType === "Customer") {
                return (
                    <Routes>
                    <Route  path='/index.html' element={<CustomerDashboard />}/>
                    <Route  path='/index.html/login' element={<LoginPage />}/>
                    <Route  path='/index.html/Profile' element={<CustomerProfileSkipPage/>}/>
                    <Route  path='/index.html/CustomerDashboard' element={<CustomerDashboard/>}/>
                    <Route  path='/index.html/VendorDashboard' element={<VendorDashboard/>}/>
                    <Route  path='/index.html/Subscription' element={<Subscription/>}/>
                    <Route  path='/index.html/SignUp' element={<SignUpPage/>}/>
                    <Route  path='/index.html/logOut' element={<LogOut/>}/>

                    </Routes>
                );

                } else if (profileCheck.profileType === "Vendor") {
                return (
                    <Routes>
                    <Route  path='/index.html' element={<VendorDashboard />}/>
                    <Route  path='/index.html/login' element={<LoginPage />}/>
                    {/* <Route  path='/index.html/Profile' element={<CustomerProfileSkipPage/>}/> */}
                    <Route  path='/index.html/Profile' element={<VendorProfileSkip/>}/>
                    {/* <Route  path='/index.html/CustomerDashboard' element={<CustomerDashboard/>}/> */}
                    <Route  path='/index.html/VendorDashboard' element={<VendorDashboard/>}/>
                    <Route  path='/index.html/ActiveSubscriptions' element={<ActiveVendorSubscription/>}/>
                    {/* <Route  path='/index.html/Subscription' element={<Subscription/>}/> */}
                    {/* <Route  path='/index.html/SignUp' element={<SignUpPage/>}/> */}
                    <Route  path='/index.html/SignUp' element={<VendorSignUpPage/>}/>
                    <Route  path='/index.html/logOut' element={<LogOut/>}/>
                    </Routes>
                );
                }
  }
   else {

        return (
            <Routes>
            <Route  path='/index.html' element={<LoginPage />}/>
            <Route  path='/index.html/login' element={<LoginPage />}/>
            <Route  path='/index.html/Profile' element={<CustomerProfileSkipPage/>}/>
            <Route  path='/index.html/CustomerDashboard' element={<CustomerDashboard/>}/>
            <Route  path='/index.html/VendorDashboard' element={<VendorDashboard/>}/>
            <Route  path='/index.html/Subscription' element={<Subscription/>}/>
            <Route  path='/index.html/SignUp' element={<SignUpPage/>}/>
            <Route  path='/index.html/logOut' element={<LogOut/>}/>
            </Routes>
        );

        }
}




// const App = () => {
//   return (
//     <div>
//       <LogOut/>
//     </div>
//   )
// }

// export default App






