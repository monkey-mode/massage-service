"use client";
import {
  Image,
  Link,
  Menu,
  Navbar,
  NavbarContent,
  NavbarItem,
  Spacer
} from "@nextui-org/react";
import NextImage from "next/image";

interface Menu {
  Name: string;
  Link: string;
}
export default function NavBar() {
  const menuList: Menu[] = [
    { Name: "Home", Link: "first-section" },
    { Name: "Service", Link: "second-section" },
    { Name: "Package", Link: "/package" },
    { Name: "Galler", Link: "/galler" },
    { Name: "Contact Us", Link: "/contact-us" }
  ];

  return (
    // <Navbar className="shadow-md bg-[#5C7042] fixed bg-[#f4f4f5]" classNames={{wrapper: 'w-full'}}>
    <Navbar
      shouldHideOnScroll
      className="shadow-md bg-[#f4f4f5]"
      classNames={{ wrapper: "flex-col h-auto" }}
    >
      <Spacer />
      <NavbarContent justify="center">
        <Image
          as={NextImage}
          radius="none"
          width={100}
          height={100}
          src="/logo.svg"
          alt="NextUI hero Image"
        />
        {/* <p className="font-bold text-inherit">KENKO BEAUTY AND MASSSGE 💆🏻‍♀️</p> */}
      </NavbarContent>
      <NavbarContent
        justify="center"
        className="flex-wrap lg:gap-6 sm:gap-2 gap-0"
      >
        {menuList.map((item, index) => (
          <NavbarItem key={index}>
            <Link
              isBlock
              color="foreground"
              className="sm:text-sm font-semibold text-xs"
              href={`#${item.Link.toLowerCase()}`}
            >
              {item.Name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <Spacer />
    </Navbar>
  );
}
