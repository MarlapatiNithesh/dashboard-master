// File: src/pages/ServicesPage.jsx
import React, { useEffect, useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Heading } from '@chakra-ui/react';
import { useRole } from '../context/RoleContext';
import { BACKEND_URL } from '../index';

const ServicesPage = () => {
  const { token, role } = useRole();
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      const res = await fetch(`${BACKEND_URL}/api/${role}/services`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      const data = await res.json();
      setServices(data);
    };
    fetchServices();
  }, [role, token]);

  return (
    <>
      <Heading mb={4}>Services</Heading>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Name</Th>
            <Th>Price</Th>
          </Tr>
        </Thead>
        <Tbody>
          {services.map(service => (
            <Tr key={service.id}>
              <Td>{service.id}</Td>
              <Td>{service.name}</Td>
              <Td>{service.price}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </>
  );
};

export default ServicesPage;
