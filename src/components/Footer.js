import { Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            We are one of the  best crypto trading app in India, we provide guidance
            at very cheap price.
          </Text>
        </VStack>

        <VStack w={"full"} alignItems={["center","flex-end"]} >
        <Text fontWeight={"bold"} 
        >@ Founder </Text>
        <Text  fontSize={"sm"}
        letterSpacing={"widest"}
        textAlign={["center", "right"]}
        >Anshu Yadav</Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;