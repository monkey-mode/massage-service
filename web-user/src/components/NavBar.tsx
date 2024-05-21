"use client";
import {
  Image,
  Link,
  Navbar,
  NavbarContent,
  NavbarItem,
  Spacer
} from "@nextui-org/react";
import NextImage from "next/image";

export default function NavBar() {
  const menuList = ["Home", "Service", "Package", "Galler", "Contact Us"];

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
          width={80}
          height={80}
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
              className=" text-xs"
              href={`#${item.toLowerCase()}`}
            >
              {item}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <Spacer />
    </Navbar>
  );
}
