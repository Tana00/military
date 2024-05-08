import React, { useState } from "react";
import { Portal, Stack, Box, Text } from "@chakra-ui/react";
// Layout components
import AdminNavbar from "./Navbars/AdminNavbar.js";
import Sidebar from "./Sidebar/Sidebar.js";
import routes from "./routes.js";
// Custom components
import MainPanel from "../components/Layout/MainPanel";
import PanelContainer from "../components/Layout/PanelContainer";
import PanelContent from "../components/Layout/PanelContent";
import Dashboard from "./dashboard";
import { Routes, Route } from "react-router-dom";

const DashboardLayout = (props) => {
  const { ...rest } = props;
  // states and functions
  const [fixed, setFixed] = useState(false);

  return (
    <Box>
      <Box
        minH="40vh"
        w="100%"
        position="absolute"
        bg={"#0b1437"}
        bgSize="cover"
        top="0"
      />
      <Sidebar
        routes={routes}
        logo={
          <Stack direction="row" align="center" justify="center">
            <Box w="1px" h="20px" bg={"white"} />
            <Text color={"white"} fontWeight={700}>
              MilitaryLoan
            </Text>
          </Stack>
        }
        display="none"
        {...rest}
      />
      <MainPanel
        w={{
          base: "100%",
          xl: "calc(100% - 275px)",
        }}
      >
        <Portal>
          <AdminNavbar
            onOpen={true}
            brandText={"Dashboard"}
            secondary={"fixed"}
            fixed={fixed}
            {...rest}
          />
        </Portal>

        <PanelContent>
          <PanelContainer>
            <Routes>
              <Route path="*" element={<Dashboard />} />
            </Routes>
          </PanelContainer>
        </PanelContent>
      </MainPanel>
    </Box>
  );
};

export default DashboardLayout;
