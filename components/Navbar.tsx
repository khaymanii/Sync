"use client";
import React from "react";
import Image from "next/image";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["Home", "Product", "Category", "About"];

  return (
    <Navbar
      className="bg-purple-500"
      isBordered
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Image src="./images/logo.svg" alt="logo" width={150} height={150} />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-10 " justify="center">
        <NavbarItem isActive>
          <Link className="text-white text-sm" href="#">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white text-sm" href="#" aria-current="page">
            Product
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white text-sm" href="#">
            Category
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white text-sm" href="#">
            About
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Button
            as={Link}
            radius="full"
            variant="bordered"
            href="#"
            className="text-white border-purple-900"
          >
            Login
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            radius="full"
            href="#"
            variant="flat"
            className="bg-purple-900"
          >
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="w-full text-gray-600 text-sm" href="#" size="lg">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
