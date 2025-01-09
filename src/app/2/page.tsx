"use client";
import React, { useEffect } from "react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { useWindowSize } from "react-use";

export default function Navbar() {
  const { width } = useWindowSize();
  const [isCollapsed, setIsCollapsed] = React.useState(false);

  const [isShowSearch, setIsShowSearch] = React.useState(false);

  useEffect(() => {
    if (width > 1023) {
      setIsCollapsed(false);
      setIsShowSearch(true);
    } else {
      setIsCollapsed(true);
      setIsShowSearch(false);
    }
  }, [width]);

  const navList = [
    {
      name: "Showcase",
      path: "showcase",
    },
    {
      name: "Docs",
      path: "docs",
    },
    {
      name: "Blog",
      path: "blog",
    },
    {
      name: "Analytics",
      path: "analytic",
    },
    {
      name: "Commerce",
      path: "commerce",
    },
    {
      name: "Templates",
      path: "template",
    },
    {
      name: "Enterprise",
      path: "enterprise",
    },
  ];
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap p-5">
        <div className="flex items-center flex-shrink-0">
          <Image
            src="https://aeoncredit.com.my/wp-content/uploads/AEON.png"
            width={100}
            height={80}
            alt="Aeon Logo"
          />
        </div>
        <div className={`${width > 1023 ? "hidden" : "block"} `}>
          <div className="flex gap-3">
            <MagnifyingGlassIcon
              className="h-6 w-6"
              onClick={() => {
                setIsShowSearch(!isShowSearch);
              }}
            />

            {isCollapsed ? (
              <Bars3Icon
                className="h-6 w-6"
                onClick={() => setIsCollapsed(false)}
              />
            ) : (
              <XMarkIcon
                className="h-6 w-6 "
                onClick={() => setIsCollapsed(true)}
              />
            )}
          </div>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto ">
          <div className={`${isShowSearch ? "block" : "hidden"} order-last`}>
            <div
              className="inline-block text-sm leading-none lg:mt-0  mt-5
            "
            >
              <form className="lg:block ">
                <input
                  type="text"
                  placeholder="Search documentation"
                  className="text-sm"
                ></input>
              </form>
            </div>
          </div>
          <div className="text-sm lg:flex-grow  lg:mt-0 ">
            {!isCollapsed && (
              <div
                className={`lg:justify-self-center overflow-x-auto lg:overflow-hidden `}
              >
                {navList.map((item) => (
                  <a
                    key={item.path}
                    href={`#${item.path}`}
                    className="block mt-4 lg:inline-block lg:mt-0 text-gray-900 hover:text-fuchsia-700  text-sm font-medium lg:mx-4"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
