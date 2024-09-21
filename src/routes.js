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
import Product from "views/admin/product";
import SingleOrders from "views/admin/Orders/SingleOrders";

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
    name: "Product",
    layout: "/admin",
    path: "product",
    icon: <MdPerson className="h-6 w-6" />,
    component: <Product />,
  },
  {
    name: "Order details",
    layout: "/admin",
    path: "orders/:id",
    icon: <MdOutlineShoppingCart className="h-6 w-6" />,
    component: <SingleOrders />,
    secondary: true,
  }
];
export default routes;
