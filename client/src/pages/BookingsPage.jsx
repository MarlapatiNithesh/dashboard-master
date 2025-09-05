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

const BookingsPage = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');

    const fetchBookings = async () => {
      try {
        const res = await fetch(`${BACKEND_URL}/api/admin/bookings`, {
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
          throw new Error('Failed to fetch bookings.');
        }

        const data = await res.json();

        // Ensure we only set array data
        if (Array.isArray(data)) {
          setBookings(data);
        } else {
          setBookings([]);
          setError('Unexpected response from server.');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
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
      <Heading mb={6}>Bookings</Heading>
      {bookings.length === 0 ? (
        <Text>No bookings available.</Text>
      ) : (
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
      )}
    </Box>
  );
};

export default BookingsPage;

