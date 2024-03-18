import React from "react";
import { Box, Heading, Flex, Spacer, Link } from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex as="header" align="center" justify="space-between" wrap="wrap" padding="1.5rem" bg="gray.100">
      <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
        Expense Tracker
      </Heading>
      <Spacer />
      <Box>
        <Link mr={4}>Home</Link>
        <Link>About</Link>
      </Box>
    </Flex>
  );
};

export default Header;
