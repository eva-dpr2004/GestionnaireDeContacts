import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginPage from './pages/Auth/LoginPage';
import RegistrationPage from './pages/Auth/RegistrationPage';
import AddContact from './pages/Contacts/AddContactPage';
import UpdateContact from './pages/Contacts/UpdateContactPage';
import HomePage from './pages/HomePage/HomePage';
import ProfilePage from './pages/Users/ProfilePage';
import ShowUserPage from './pages/Users/ShowUser';
import UpdateUserPage from './pages/Users/UpdateUserPage';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/add-contact" element={<AddContact />} />
        <Route path="/update-contact/:id" element={<UpdateContact />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/show-user/:id" element={<ShowUserPage />} />
        <Route path="/update-user/:id" element={<UpdateUserPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
