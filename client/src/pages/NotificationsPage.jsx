// File: src/pages/NotificationsPage.jsx
import React, { useEffect, useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Heading } from '@chakra-ui/react';
import { useRole } from '../context/RoleContext';
import { BACKEND_URL } from '../index';
const NotificationsPage = () => {
  const { token, role } = useRole();
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      const res = await fetch(`${BACKEND_URL}/api/${role}/notifications`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      const data = await res.json();
      setNotifications(data);
    };
    fetchNotifications();
  }, [role, token]);

  return (
    <>
      <Heading mb={4}>Notifications</Heading>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Message</Th>
          </Tr>
        </Thead>
        <Tbody>
          {notifications.map(n => (
            <Tr key={n.id}>
              <Td>{n.id}</Td>
              <Td>{n.message}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </>
  );
};

export default NotificationsPage;
