// File: src/pages/LoginPage.jsx
import React, { useState, useEffect } from 'react';
import { Box, Input, Button, Heading } from '@chakra-ui/react';
import { useRole } from '../context/RoleContext';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, token } = useRole();
  const navigate = useNavigate();

  useEffect(() => {
    console.log('Token changed:', token); 
    if (token) navigate('/bookings');
  }, [token, navigate]);

  const handleLogin = () => {
    if (email === 'admin@demo.com' && password === 'admin') {
      login('demo-token', 'admin');
    } else {
      alert('Demo Login: admin@demo.com / admin');
    }
  };

  return (
    <Box maxW="md" mx="auto" mt={20} p={8} borderWidth={1} borderRadius={8} boxShadow="lg">
      <Heading mb={6}>Login</Heading>
      <Input mb={3} placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <Input mb={3} placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <Button colorScheme="teal" onClick={handleLogin}>Login</Button>
    </Box>
  );
};
export default LoginPage;

