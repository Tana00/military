import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Main from "./Main";
import SignIn from "./components/signin";
import SignUp from "./components/signup";
import DashboardLayout from "./components/layout";
import theme from "../src/theme/theme.js";

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/admin" element={<DashboardLayout />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
};

export default App;
