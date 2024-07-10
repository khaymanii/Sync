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

export default function Footer() {
  return (
    <div className="max-w-5xl mx-auto px-4 flex flex-col">
      {" "}
      <div className="mb-8 flex items-center justify-center">
        <Image src="./images/logo.svg" alt="logo" width={50} height={50} />
      </div>
      <hr className="border-t border-white w-full pb-8" />
      <Navbar className="bg-black">
        <NavbarContent className="">
          <NavbarItem>
            <Link className="text-white text-xs" href="#">
              TERMS & CONDITIONS
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent className="sm:flex gap-10 " justify="center">
          <NavbarItem>
            <Link className="text-white text-xs" href="#">
              Feature
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="text-white text-xs" href="#" aria-current="page">
              Pricing
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="text-white text-xs" href="#">
              About Us
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="text-white text-xs" href="#">
              Contact
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <Link className="text-white text-xs" href="#">
              PRIVACY POLICY
            </Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </div>
  );
}
