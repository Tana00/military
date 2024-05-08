import { Button, Flex, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

export function SidebarHelp(props) {
  const navigate = useNavigate();
  // Pass the computed styles into the `__css` prop
  const { children, sidebarVariant, ...rest } = props;
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Flex
      justify="center"
      direction="column"
      align="center"
      mb="22px"
      mt="auto"
      mx="20px"
    >
      <Button
        w="100%"
        mt={"auto"}
        color={textColor}
        textTransform={"uppercase"}
        fontSize={"16px"}
        onClick={() => navigate("/signin")}
      >
        Sign Out
      </Button>
    </Flex>
  );
}
