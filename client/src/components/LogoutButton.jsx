// File: src/components/LogoutButton.jsx
import React from 'react';
import { Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useRole } from '../context/RoleContext';

const LogoutButton = () => {
  const { setRole, setToken } = useRole();
  const navigate = useNavigate();

  const handleLogout = () => {
    setRole(null);
    setToken(null);
    navigate('/login');
  };

  return (
    <Button colorScheme="red" onClick={handleLogout} mt={4}>
      Logout
    </Button>
  );
};

export default LogoutButton;
