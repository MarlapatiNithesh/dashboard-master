import React from 'react';
import { Box, Flex, Button, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useRole } from '../context/RoleContext';

const DashboardLayout = ({ children }) => {
  const { logout } = useRole();

  return (
    <Flex>
      <VStack spacing={4} align="stretch" w="200px" p={5} bg="gray.100" minH="100vh">
        <Link to="/bookings">Bookings</Link>
        <Link to="/services">Services</Link>
        <Link to="/notifications">Notifications</Link>
        <Link to="/users">Users</Link>
        <Button onClick={logout} colorScheme="red">Logout</Button>
      </VStack>
      <Box flex={1} p={6}>{children}</Box>
    </Flex>
  );
};
export default DashboardLayout;