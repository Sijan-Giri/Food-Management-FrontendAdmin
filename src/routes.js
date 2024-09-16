import React from "react";

// Admin Imports
import MainDashboard from "views/admin/default";
// Auth Imports

// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
} from "react-icons/md";
import Orders from "views/admin/Orders";
import Users from "views/admin/users";
import Reviews from "views/admin/reviews";

const routes = [
  {
    name: "Dashboard",
    layout: "/admin",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
  },
  {
    name: "Orders",
    layout: "/admin",
    path: "orders",
    icon: <MdOutlineShoppingCart className="h-6 w-6" />,
    component: <Orders />,
    secondary: true,
  },
  {
    name: "Users",
    layout: "/admin",
    icon: <MdBarChart className="h-6 w-6" />,
    path: "users",
    component: <Users />,
  },
  {
    name: "Reviews",
    layout: "/admin",
    path: "reviews",
    icon: <MdPerson className="h-6 w-6" />,
    component: <Reviews />,
  }
];
export default routes;
