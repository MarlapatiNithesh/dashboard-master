import React, { useEffect, useState } from 'react';
import { Box, Heading, Table, Thead, Tbody, Tr, Th, Td, Spinner } from '@chakra-ui/react';
import { BACKEND_URL } from '../index';

const BookingsPage = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    fetch(`${BACKEND_URL}/api/admin/bookings`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => res.json())
      .then(data => {
        setBookings(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <Spinner size="xl" />;

  return (
    <Box>
      <Heading mb={6}>Bookings</Heading>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Customer</Th>
            <Th>Status</Th>
          </Tr>
        </Thead>
        <Tbody>
          {bookings.map(b => (
            <Tr key={b.id}>
              <Td>{b.id}</Td>
              <Td>{b.customer || 'N/A'}</Td>
              <Td>{b.status}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};
export default BookingsPage;
