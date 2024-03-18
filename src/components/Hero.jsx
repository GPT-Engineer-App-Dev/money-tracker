import React from "react";
import { Box, Heading, Text, Button } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading as="h2" size="xl" mt={6} mb={2}>
        Take Control of Your Finances
      </Heading>
      <Text color={"gray.500"} mb={6}>
        Easily track your income and expenses with our intuitive expense tracker app. Stay on top of your spending and reach your financial goals faster.
      </Text>
      <Button colorScheme="blue" size="lg">
        Get Started
      </Button>
    </Box>
  );
};

export default Hero;
