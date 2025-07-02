"use client";
import React, { useState } from "react";
import { Menu, CircleX, MoveUpRight, MessageCircle, User } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";
import { countryList, currencyList } from "@/lib/frontend/data";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Avatar, Badge, Space } from "antd";
import { usePathname } from "next/navigation";

export default function Navbar() {

  const pathName = usePathname()

  // Mobile view states
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Hotels",
      link: "/hotels",
    },
    {
      name: "House",
      link: "/house",
    },
    {
      name: "About Us",
      link: "/about",
    },
    {
      name: "Contact Us",
      link: "/contact",
    },
  ];
  const [country, setCountry] = React.useState("USA");

  const handleChange = (event: any) => {
    setCountry(event.target.value);
  };

  return (
    <div className="bg-[#A5D3F1] w-full  text-slate-900 p-4">
      {/* Logo and title */}
      {/* Mobile view */}
      <div className="block md:hidden  ">
        <div className="flex justify-end ">
          <button
            className=" "
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <div>
                <span className="">
                  {" "}
                  <CircleX />
                </span>
              </div>
            ) : (
              <div className="flex justify-between items-center space-x-2">
                <Link href="/" className="text-2xl font-bold text-white absolute left-4 ">
                  Nifad
                </Link>
                <span className="text-white">
                  <Menu />
                </span>
              </div>
            )}
          </button>
        </div>
        {isMobileMenuOpen && (
          <div className="mt-2 flex flex-col gap-4">
            <Link href="/" className="text-2xl font-bold text-white">
              Nifad
            </Link>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.1 * navLinks.indexOf(link),
                  }}
                  className="text-white hover:text-gray-400"
                >
                  <Link
                    href={link.link}
                    className="text-white hover:text-gray-400"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>

            <div className="flex flex-col space-y-2 mt-4">
              <Select>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Select a currency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Currency</SelectLabel>
                    {currencyList.map((currency) => (
                      <SelectItem
                        key={currency.value}
                        value={currency.value}
                        disabled={currency.disabled}
                      >
                        {currency.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Select a country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Country</SelectLabel>
                    {countryList.map((country) => (
                      <SelectItem
                        key={country.value}
                        value={country.value}
                        disabled={country.disabled}
                      >
                        {country.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Button className="w-[150px] ring-2 ring-sky-600 bg-transparent hover:bg-sky-600 hover:text-white">
                List you property{" "}
                <span>
                  <MoveUpRight />
                </span>
              </Button>

              <Space size="middle" className="mt-2">
                <Badge count={5}>
                  <button className=" rounded-full hover:bg-transparent text-sky-700">
                    <MessageCircle />
                  </button>
                </Badge>
              </Space>
            </div>
            <div>
              <Button className="ring-1 ring-sky-600 bg-transparent hover:bg-sky-600 hover:text-white mt-2">
                <User />
                <span className="ml-2">Sunan</span>
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Desktop view */}
      <div className="hidden md:block sm:px-40  md:px-62">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-10">
            <Link href="/" className="text-2xl font-bold ">
              Nifad
            </Link>
            <ul className="flex space-x-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.link}
                    className={` hover:text-gray-700 ${pathName === link.link ? "text-[#007DD0] font-semibold" : "text-[#626262]"}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center space-x-4">
            <Select >
              <SelectTrigger className="w-[150px] text-[#007DD0]">
                <SelectValue placeholder="Select a currency" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Currency</SelectLabel>
                  {currencyList.map((currency) => (
                    <SelectItem
                      key={currency.value}
                      value={currency.value}
                      disabled={currency.disabled}
                    >
                      {currency.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-[150px] text-[#007DD0]">
                <SelectValue placeholder="Select a country" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Country</SelectLabel>
                  {countryList.map((country) => (
                    <SelectItem
                      key={country.value}
                      value={country.value}
                      disabled={country.disabled}
                    >
                      {country.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            <Button className="ring-1 ring-sky-400 bg-transparent hover:ring-sky-500 text-sky-400 hover:bg-transparent hover:text-sky-500">
              List your property{" "}
              <span>
                <MoveUpRight />
              </span>
            </Button>

            <Space size="middle">
              <Badge count={1}>
                <button className="rounded-full hover:bg-transparent text-sky-500">
                  <MessageCircle />
                </button>
              </Badge>
            </Space>

            <Button className="ring-1 ring-sky-500 bg-transparent  hover:bg-transparent text-sky-500 hover:text-sky-600">
              <User />
              <span className="ml-2">Sunan</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
