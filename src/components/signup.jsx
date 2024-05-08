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
  Checkbox,
  Text,
  InputLeftElement,
  InputGroup,
  Select,
  Stepper,
  Step,
  StepIndicator,
  StepStatus,
  StepIcon,
  StepNumber,
  StepTitle,
  useSteps,
  StepDescription,
  StepSeparator,
  useColorModeValue,
  HStack,
  PinInput,
  PinInputField,
  Image,
} from "@chakra-ui/react";
import LoanImage from "../assets/images/loan.png";

const Step1 = ({ setActiveStep }) => {
  let navigate = useNavigate();
  const titleColor = "#0b1437";
  const textColor = useColorModeValue("gray.400", "white");
  return (
    <Flex
      alignItems="center"
      justifyContent="start"
      style={{ userSelect: "none" }}
    >
      <Flex
        direction="column"
        w="100%"
        background="transparent"
        py="48px"
        mt={{ md: "80px", lg: "50px" }}
      >
        <Heading color={titleColor} fontSize="26px" mb="30px">
          Personal Details
        </Heading>
        {/* <Text
          mb="36px"
          ms="4px"
          color={textColor}
          fontWeight="bold"
          fontSize="14px"
        >
          Enter your email and password to sign in
        </Text> */}
        <FormControl>
          <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
            Full Name
          </FormLabel>
          <Input
            borderRadius="5px"
            mb="20px"
            fontSize="sm"
            type="text"
            placeholder="Your full name"
          />
          <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
            Email
          </FormLabel>
          <Input
            borderRadius="5px"
            mb="20px"
            fontSize="sm"
            type="email"
            placeholder="Your email address"
          />
          <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
            Phone Number
          </FormLabel>
          <InputGroup>
            {/* <InputLeftElement pointerEvents="none">
              <PhoneIcon color="gray.300" />
            </InputLeftElement> */}
            <Input
              type="tel"
              borderRadius="5px"
              mb="20px"
              fontSize="sm"
              placeholder="Your phone number"
              //   size="lg"
            />
          </InputGroup>
          <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
            Service Branch
          </FormLabel>
          <Select
            placeholder="Select service branch"
            mb="20px"
            fontSize={"14px"}
            _placeholder={{ opacity: 0.6, color: "gray.500" }}
          >
            <option value="army">Army</option>
            <option value="navy">Navy</option>
            <option value="ariforce">Airforce</option>
          </Select>
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
          <Checkbox
            _checked={{
              "& .chakra-checkbox__control": {
                background: "#0b1437",
                border: "1px solid #0b1437",
              },
            }}
            defaultChecked
            size="md"
            colorScheme={titleColor}
          >
            I accept{" "}
            <Link color={titleColor} as="span" fontWeight={600}>
              Terms and Conditions
            </Link>
          </Checkbox>
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
            onClick={() => setActiveStep(2)}
          >
            SIGN UP
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
            Already have an account?
            <Link
              onClick={() => navigate("/signin")}
              color={titleColor}
              as="span"
              ms="5px"
              fontWeight="bold"
            >
              Sign In
            </Link>
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

const Step2 = () => {
  let navigate = useNavigate();
  const titleColor = "#0b1437";
  const textColor = useColorModeValue("gray.400", "white");
  return (
    <Flex
      alignItems="center"
      justifyContent="start"
      style={{ userSelect: "none" }}
    >
      <Flex
        direction="column"
        w="100%"
        background="transparent"
        py="48px"
        mt={{ md: "150px", lg: "80px" }}
      >
        <Heading color={titleColor} fontSize="26px" mb="10px">
          Phone Number Validation
        </Heading>
        <Text
          mb="36px"
          ms="4px"
          color={textColor}
          fontWeight="bold"
          fontSize="14px"
        >
          Enter the otp sent to your phone number
        </Text>
        <FormControl>
          <HStack spacing={8}>
            <PinInput size="lg" placeholder="" mask>
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
            </PinInput>
          </HStack>
          <Button
            fontSize="12px"
            type="submit"
            bg={titleColor}
            w="100%"
            h="45"
            mb="20px"
            color="white"
            mt="30px"
            _hover={{
              bg: "#4B5320",
            }}
            _active={{
              bg: "#4B5320",
            }}
            onClick={() => navigate("/admin")}
          >
            SUBMIT
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
            Already have an account?
            <Link
              onClick={() => navigate("/signin")}
              color={titleColor}
              as="span"
              ms="5px"
              fontWeight="bold"
            >
              Sign In
            </Link>
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

function SignUp() {
  const { activeStep, setActiveStep } = useSteps({
    index: 1,
    count: 2,
  });

  const steps = [
    {
      title: "Personal Details",
      component: <Step1 setActiveStep={setActiveStep} />,
    },
    {
      title: "Validate Phone Number",
      component: <Step2 />,
    },
  ];

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
        // flexDirection={"column"}
      >
        <Box my={"auto"} w={{ base: "100%", md: "50%", lg: "42%" }}>
          <Stepper index={activeStep}>
            {steps.map((step, index) => (
              <Step key={index}>
                <StepIndicator>
                  <StepStatus
                    complete={<StepIcon />}
                    incomplete={<StepNumber />}
                    active={<StepNumber />}
                  />
                </StepIndicator>

                {/* <Box flexShrink="0">
                  <StepTitle>{step.title}</StepTitle>
                </Box> */}

                <StepSeparator />
              </Step>
            ))}
          </Stepper>
          {steps[activeStep - 1].component}
        </Box>
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

export default SignUp;
