// File: src/pages/UsersPage.jsx
import React, { useEffect, useState } from 'react';
import {
  Box,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Spinner,
  Text,
} from '@chakra-ui/react';
import { BACKEND_URL } from '../index';

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');

    const fetchUsers = async () => {
      try {
        const res = await fetch(`${BACKEND_URL}/api/admin/users`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          if (res.status === 401) {
            throw new Error('Unauthorized – please log in again.');
          }
          if (res.status === 404) {
            throw new Error('API endpoint not found.');
          }
          throw new Error('Failed to fetch users.');
        }

        const data = await res.json();

        if (Array.isArray(data)) {
          setUsers(data);
        } else {
          setUsers([]);
          setError('Unexpected response format from server.');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <Spinner size="xl" />;

  if (error) {
    return (
      <Box mt={6}>
        <Heading size="md">Error</Heading>
        <Text color="red.500" mt={2}>
          {error}
        </Text>
      </Box>
    );
  }

  return (
    <Box>
      <Heading mb={6}>All Users</Heading>
      {users.length === 0 ? (
        <Text>No users available.</Text>
      ) : (
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Email</Th>
              <Th>Role</Th>
            </Tr>
          </Thead>
          <Tbody>
            {users.map(user => (
              <Tr key={user.id}>
                <Td>{user.id}</Td>
                <Td>{user.email}</Td>
                <Td>{user.role}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      )}
    </Box>
  );
};

export default UsersPage;

