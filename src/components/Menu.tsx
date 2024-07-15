import React, { useState } from "react";
import RoundLogoButton from "./RoundLogoButton";

const menuItems = [
  { name: "Home", href: "#" },
  { name: "About", href: "#" },
  { name: "Services", href: "#" },
  { name: "Contact", href: "#" },
];

const languages = [
  { name: "English (US)", code: "us", svgPath: "...svg-path-us..." },
  { name: "Deutsch", code: "de", svgPath: "...svg-path-de..." },
  { name: "Italiano", code: "it", svgPath: "...svg-path-it..." },
];

export const Menu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setLanguageDropdownOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);
  const toggleLanguageDropdown = () =>
    setLanguageDropdownOpen(!isLanguageDropdownOpen);

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-800">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <RoundLogoButton
          logoUrl={"https://i.imgur.com/eEd4cV7.jpeg"}
          companyName={"Meonix"}
        />
        <div className="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            onClick={toggleLanguageDropdown}
            className="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <svg
              className="w-5 h-5 rounded-full me-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 3900 3900"
            >
              <path fill="#b22234" d="M0 0h7410v3900H0z" />
              <path
                d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0"
                stroke="#fff"
                strokeWidth="300"
              />
              <path fill="#3c3b6e" d="M0 0h2964v2100H0z" />
              <g fill="#fff">
                <g id="d">
                  <g id="c">
                    <g id="e">
                      <g id="b">
                        <path
                          id="a"
                          d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z"
                        />
                        <use xlinkHref="#a" y="420" />
                        <use xlinkHref="#a" y="840" />
                        <use xlinkHref="#a" y="1260" />
                      </g>
                      <use xlinkHref="#a" y="1680" />
                    </g>
                    <use xlinkHref="#b" x="247" y="210" />
                  </g>
                  <use xlinkHref="#c" x="494" />
                </g>
                <use xlinkHref="#d" x="988" />
                <use xlinkHref="#c" x="1976" />
                <use xlinkHref="#e" x="2470" />
              </g>
            </svg>
            English (US)
          </button>
          {isLanguageDropdownOpen && (
            <div
              className="absolute mt-2 w-48 bg-white top-14 divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 right-0"
              id="language-dropdown-menu"
            >
              <ul className="py-2 font-medium" role="none">
                {languages.map((language) => (
                  <li key={language.code}>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem"
                    >
                      <div className="inline-flex items-center">
                        <svg
                          className="h-3.5 w-3.5 rounded-full me-2"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          {" "}
                          <path fill="#ffce00" d="M0 341.3h512V512H0z" />{" "}
                          <path d="M0 0h512v170.7H0z" />{" "}
                          <path fill="#d00" d="M0 170.7h512v170.6H0z" />{" "}
                        </svg>
                        {language.name}
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {/*<button type="button" className="md:hidden ml-2" onClick={toggleMenu}>*/}
          {/*  <svg*/}
          {/*    className="w-6 h-6"*/}
          {/*    fill="none"*/}
          {/*    stroke="currentColor"*/}
          {/*    viewBox="0 0 24 24"*/}
          {/*    xmlns="http://www.w3.org/2000/svg"*/}
          {/*  >*/}
          {/*    <path*/}
          {/*      strokeLinecap="round"*/}
          {/*      strokeLinejoin="round"*/}
          {/*      strokeWidth="2"*/}
          {/*      d="M4 6h16M4 12h16M4 18h16"*/}
          {/*    ></path>*/}
          {/*  </svg>*/}
          {/*</button>*/}
        </div>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:flex md:items-center md:w-auto`}
          id="mobile-menu"
        >
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="block py-2 pr-4 pl-3 text-gray-700 rounded md:bg-transparent md:p-0 md:dark:text-white dark:bg-gray-800 md:dark:bg-transparent dark:text-white"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
