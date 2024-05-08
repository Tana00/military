import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Flex,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Switch,
  Text,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import LoanImage from "../assets/images/loan.png";

function SignIn() {
  let navigate = useNavigate();

  const titleColor = "#0b1437";
  const textColor = useColorModeValue("gray.400", "white");
  return (
    <Flex position="relative" mb="40px">
      <Flex
        h={"100vh"}
        w="100%"
        maxW="1044px"
        mx="auto"
        justifyContent="space-between"
        mb="30px"
        pt={{ sm: "100px", md: "0px" }}
      >
        <Flex
          alignItems="center"
          justifyContent="start"
          style={{ userSelect: "none" }}
          w={{ base: "100%", md: "50%", lg: "42%" }}
        >
          <Flex
            direction="column"
            w="100%"
            background="transparent"
            py="48px"
            mt={{ md: "150px", lg: "80px" }}
          >
            <Heading color={titleColor} fontSize="32px" mb="10px">
              Welcome Back
            </Heading>
            <Text
              mb="36px"
              ms="4px"
              color={textColor}
              fontWeight="bold"
              fontSize="14px"
            >
              Enter your email and password to sign in
            </Text>
            <FormControl>
              <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                Email
              </FormLabel>
              <Input
                borderRadius="5px"
                mb="24px"
                fontSize="sm"
                type="text"
                placeholder="Your email adress"
                // size="lg"
              />
              <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                Password
              </FormLabel>
              <Input
                borderRadius="5px"
                mb="36px"
                fontSize="sm"
                type="password"
                placeholder="Your password"
                // size="lg"
              />
              <FormControl display="flex" alignItems="center">
                <Switch id="remember-login" colorScheme="teal" me="10px" />
                <FormLabel
                  htmlFor="remember-login"
                  mb="0"
                  ms="1"
                  fontWeight="normal"
                >
                  Remember me
                </FormLabel>
              </FormControl>
              <Button
                fontSize="12px"
                type="submit"
                bg={titleColor}
                w="100%"
                h="45"
                mb="20px"
                color="white"
                mt="20px"
                _hover={{
                  bg: "#4B5320",
                }}
                _active={{
                  bg: "#4B5320",
                }}
                onClick={() => navigate("/admin")}
              >
                SIGN IN
              </Button>
            </FormControl>
            <Flex
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              maxW="100%"
              mt="0px"
            >
              <Text color={textColor} fontWeight="medium">
                Don't have an account?
                <Link
                  onClick={() => navigate("/signup")}
                  color={titleColor}
                  as="span"
                  ms="5px"
                  fontWeight="bold"
                >
                  Sign Up
                </Link>
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Box
          display={{ base: "none", md: "block" }}
          overflowX="hidden"
          h="100%"
          w="40vw"
          position="absolute"
          right="0px"
        >
          <Box
            bgColor={"#0b1437"}
            w="100%"
            h="100%"
            position="absolute"
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Image src={LoanImage} alt="military man approves" />
            <Heading fontSize={"28px"} color={"white"}>
              Start Your Secure Loan Journey Now
            </Heading>
            <Text color={"#e2e8f0"} mt={"1.5px"} fontSize={"14px"}>
              Sign Up Today to Unlock Tailored Military Financial Solutions!"
            </Text>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
}

export default SignIn;
