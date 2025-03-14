import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AppNavbar from './components/AppNavbar';
import Register from './pages/Register';
import Login from './pages/Login';
import Logout from './pages/Logout';
import AddWorkout from './pages/AddWorkout';
import Workouts from './pages/Workouts';
import { UserProvider } from './UserContext';
import Home from './pages/Home';
import Error from './pages/Error';

function App() {

    const [user, setUser] = useState({
        id: null,
        isAdmin: null
    });

    const unsetUser = () => {
      localStorage.clear();
    };

   useEffect(() => {
       const token = localStorage.getItem('token');
       // console.log("Token before fetch:", token);

       if (!token) {
           console.log("No token found in localStorage");
           return;
       }

       fetch(`https://fitnessapp-api-ln8u.onrender.com/users/details`, {
           headers: {
               Authorization: `Bearer ${token}`
           }
       })
       .then(res => res.json())
       .then(data => {
           console.log("User Details Response:", data);

           if (data.user) {
               setUser({
                   id: data.user._id,
                   isAdmin: data.user.isAdmin
               });
           } else {
               setUser({
                   id: null,
                   isAdmin: null
               });
           }
       })
       .catch(error => console.error("Error fetching user details:", error));
   }, []);


    return (
        <UserProvider value={{user, setUser, unsetUser}}>
            <Router>
                <AppNavbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/addWorkout" element={<AddWorkout />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/workouts" element={<Workouts />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </Router>
        </UserProvider>
    );
}

export default App;
