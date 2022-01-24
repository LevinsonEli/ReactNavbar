import {
  FaCreditCard,
  FaBook,
  FaBriefcase,
  FaMoneyBillAlt,
} from "react-icons/fa";
import React from "react";

const sublinks = [
  {
    page: "products",
    links: [
      { label: "payment", icon: <FaCreditCard />, url: "/payment" },
      { label: "terminal", icon: <FaCreditCard />, url: "/terminal" },
      { label: "connect", icon: <FaCreditCard />, url: "/connect" },
    ],
  },
  {
    page: "developers",
    links: [
      { label: "plugins", icon: <FaBook />, url: "/plugins" },
      { label: "libraries", icon: <FaBook />, url: "/libraries" },
      { label: "help", icon: <FaBook />, url: "/help" },
      { label: "billing", icon: <FaMoneyBillAlt />, url: "/billing" },
    ],
  },
  {
    page: "company",
    links: [
      { label: "about", icon: <FaBriefcase />, url: "/about" },
      { label: "customers", icon: <FaBriefcase />, url: "/customers" },
    ],
  },
];

export default sublinks;
