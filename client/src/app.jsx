import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import BookingsPage from './pages/BookingsPage';
import UsersPage from './pages/UsersPage';
import ServicesPage from './pages/ServicesPage';
import NotificationsPage from './pages/NotificationsPage';
import DashboardLayout from './components/DashboardLayout';
import { useRole } from './context/RoleContext';

const App = () => {
  const { token } = useRole();

  return (
    <Routes>
      <Route
        path="/"
        element={token ? <Navigate to="/bookings" /> : <Navigate to="/login" />}
      />
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/bookings"
        element={token ? (
          <DashboardLayout><BookingsPage /></DashboardLayout>
        ) : (
          <Navigate to="/login" />
        )}
      />
      <Route
        path="/users"
        element={token ? (
          <DashboardLayout><UsersPage /></DashboardLayout>
        ) : (
          <Navigate to="/login" />
        )}
      />
      <Route
        path="/services"
        element={token ? (
          <DashboardLayout><ServicesPage /></DashboardLayout>
        ) : (
          <Navigate to="/login" />
        )}
      />
      <Route
        path="/notifications"
        element={token ? (
          <DashboardLayout><NotificationsPage /></DashboardLayout>
        ) : (
          <Navigate to="/login" />
        )}
      />
    </Routes>
  );
};

export default App;
