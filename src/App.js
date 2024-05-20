import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Main from "./Main";
import SignIn from "./components/signin";
import SignUp from "components/signup";
import DashboardLayout from "./components/layout";
import authTheme from "./theme/authTheme.js";
import adminTheme from "theme/adminTheme";

const useDynamicTheme = () => {
  const location = useLocation();
  const [theme, setTheme] = useState(
    location.pathname.includes("/admin") ? adminTheme : authTheme
  );

  useEffect(() => {
    // Update the theme based on the path whenever the location changes
    setTheme(location.pathname.includes("/admin") ? adminTheme : authTheme);
  }, [location]); // Dependency on location ensures theme updates when route changes

  return theme;
};

const ThemedApp = () => {
  const theme = useDynamicTheme(); // Hook to get the theme dynamically

  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/auth/signin" element={<SignIn />} />
        <Route path="/auth/signup" element={<SignUp />} />
        <Route path="/admin" element={<DashboardLayout />} />
      </Routes>
    </ChakraProvider>
  );
};

const App = () => {
  // const themes = {
  //   auth: authTheme,
  //   admin: adminTheme,
  // };

  return (
    <Router>
      <ThemedApp />
    </Router>
  );
};

export default App;
