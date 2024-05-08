// Chakra Icons
import { BellIcon } from "@chakra-ui/icons";
// Chakra Imports
import {
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
import avatar1 from "../../assets/images/avatars/avatar1.png";
import avatar2 from "../../assets/images/avatars/avatar2.png";
import avatar3 from "../../assets/images/avatars/avatar3.png";
// Custom Icons
import {
  ArgonLogoDark,
  ArgonLogoLight,
  ChakraLogoDark,
  ChakraLogoLight,
  ProfileIcon,
  SettingsIcon,
} from "../Icons/Icons";
// Custom Components
import { ItemContent } from "../Menu/ItemContent";
import { SearchBar } from "./SearchBar/SearchBar";
import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../routes.js";

export default function HeaderLinks(props) {
  const { variant, children, fixed, scrolled, secondary, onOpen, ...rest } =
    props;

  const { colorMode } = useColorMode();

  // Call useColorModeValue at the top level of your component
  const navbarIconLight = useColorModeValue("white", "gray.200");
  const navbarIconDark = useColorModeValue("gray.700", "gray.200");
  const menuBg = useColorModeValue("white", "navy.800");

  // Then use the results in your conditional logic
  let navbarIcon = navbarIconLight;
  if (fixed && scrolled) {
    navbarIcon = navbarIconDark;
  }
  if (secondary) {
    navbarIcon = "white";
  }
  return (
    <Flex
      pe={{ sm: "0px", md: "16px" }}
      w={{ sm: "100%", md: "auto" }}
      alignItems="center"
      flexDirection="row"
    >
      <SearchBar me="18px" />
      <SettingsIcon
        cursor="pointer"
        ms={{ base: "16px", xl: "0px" }}
        me="16px"
        // onClick={props.onOpen}
        color={navbarIcon}
        w="18px"
        h="18px"
      />
      <Menu>
        <MenuButton>
          <BellIcon color={navbarIcon} w="18px" h="18px" />
        </MenuButton>
        <MenuList p="16px 8px" bg={menuBg}>
          <Flex flexDirection="column">
            <MenuItem borderRadius="8px" mb="10px">
              <ItemContent
                time="13 minutes ago"
                info="from Alicia"
                boldInfo="Repayment from"
                aName="Alicia"
                aSrc={avatar1}
              />
            </MenuItem>
            <MenuItem borderRadius="8px" mb="10px">
              <ItemContent
                time="2 days ago"
                info="from Josh Henry"
                boldInfo="New loan request"
                aName="Josh Henry"
                aSrc={avatar2}
              />
            </MenuItem>
            <MenuItem borderRadius="8px">
              <ItemContent
                time="3 days ago"
                info="Payment succesfully completed!"
                boldInfo=""
                aName="Kara"
                aSrc={avatar3}
              />
            </MenuItem>
          </Flex>
        </MenuList>
      </Menu>
    </Flex>
  );
}
