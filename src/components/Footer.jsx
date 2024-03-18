import React from "react";
import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" py={4} bg="gray.100" textAlign="center">
      <Text>&copy; {new Date().getFullYear()} Expense Tracker. All rights reserved.</Text>
    </Box>
  );
};

export default Footer;
