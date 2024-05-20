// import
import React, { Component } from "react";
import Dashboard from "../components/dashboard";

import {
  HomeIcon,
  StatsIcon,
  CreditIcon,
  PersonIcon,
  DocumentIcon,
  RocketIcon,
  SupportIcon,
} from "../components/Icons/Icons";

var dashRoutes = [
  {
    path: "",
    name: "Dashboard",
    icon: <HomeIcon color="inherit" />,
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Loans",
    icon: <StatsIcon color="inherit" />,
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/billing",
    name: "Report",
    icon: <CreditIcon color="inherit" />,
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/rtl-support-page",
    name: "RTL",
    icon: <SupportIcon color="inherit" />,
    component: Dashboard,
    layout: "/admin",
  },
  {
    name: "ACCOUNT PAGES",
    category: "account",
    state: "pageCollapse",
    views: [
      {
        path: "/profile",
        name: "Profile",
        rtlName: "لوحة القيادة",
        icon: <PersonIcon color="inherit" />,
        secondaryNavbar: true,
        component: Dashboard,
        layout: "/admin",
      },
      {
        path: "/auth/signin",
        name: "Branches",
        icon: <DocumentIcon color="inherit" />,
        component: Dashboard,
        layout: "/admin",
      },
      {
        path: "/auth/signup",
        name: "Reports",
        icon: <RocketIcon color="inherit" />,
        component: Dashboard,
        layout: "/admin",
      },
    ],
  },
];
export default dashRoutes;
