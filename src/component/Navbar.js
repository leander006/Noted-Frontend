import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const socails = [
    {
      id: 1,
      child: (
        <>
          <i className="fa-brands fa-2xl fa-linkedin"></i>
        </>
      ),
      href: "https://www.linkedin.com/in/leander06/",
    },
    {
      id: 2,
      child: (
        <>
          <i className="fa-solid fa-2xl fa-envelope"></i>
        </>
      ),
      href: "mailto:leanderdsilva06@gmail.com",
    },
    {
      id: 3,
      child: (
        <>
          <i className="fa-brands fa-2xl fa-github"></i>
        </>
      ),
      href: "https://github.com/leander006",
    },
    {
      id: 4,
      child: (
        <>
          <i className="fa-brands fa-2xl fa-instagram"></i>
        </>
      ),
      href: "https://www.instagram.com/leander_dsilva06/",
    },
  ];

  const nav = [
    {
      id: 1,
      to: "/",
      name: "Home",
      child: (
        <>
          <i className="fa-sharp mr-2 fa-solid fa-house"></i>
        </>
      ),
    },
    {
      id: 2,
      to: "/about",
      name: "About",
      child: (
        <>
          <i className="fa-solid mr-2 fa-user"></i>
        </>
      ),
    },
    {
      id: 3,
      to: "/notes",
      name: "Notes",
      child: (
        <>
          <i className="fa-duotone fa-solid mr-2 fa-clipboard"></i>
        </>
      ),
    },
    {
      id: 4,
      to: "/setting",
      name: "Setting",
      child: (
        <>
          <i className="fa-solid mr-2 fa-gear"></i>
        </>
      ),
    },
  ];

  const links = [
    {
      id: 1,
      child: "Home",
      to: "/",
    },
    {
      id: 2,
      child: "About",
      to: "/about",
    },
    {
      id: 3,
      child: "Write",
      to: "/write",
    },
    {
      id: 4,
      child: "Notes",
      to: "/notes",
    },
    {
      id: 5,
      child: "Setting",
      to: "/setting",
    },
  ];
  return (
    <>
      <div className="flex md:hidden text-blue-500 items-center w-screen  bg-black/80">
        <div className="flex w-full h-full my-1 mx-3 items-center justify-between">
          {links.map(({ id, child, to }) => (
            <Link key={id} to={to}>
              {child}
            </Link>
          ))}
        </div>
      </div>
      <div className="hidden md:flex justify-between bg-black/80 flex-col text-white h-screen md:w-64">
        <div className="flex flex-col">
          <div className="mx-2 my-7 border-b">
            <h1 className="text-2xl text-blue-400">Noted</h1>
            <p>Paperless and easy</p>
          </div>
          <div className="flex flex-col h-full my-2 items-center">
            {nav.map(({ id, child, to, name }) => (
              <Link
                key={id}
                className="hover:shadow-lg hover:bg-black duration-500 flex items-center pl-16 w-full h-16 hover:text-white"
                to={to}
              >
                {child}
                {name}
              </Link>
            ))}
          </div>
        </div>

        <div className="text-center w-ful">
          <h1>Let's connect</h1>
          <div className="flex justify-center w-full">
            {socails.map(({ id, child, href }) => (
              <li key={id} className="h-10 mx-1 my-3 list-none">
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex hover:scale-125 duration-150 bg-blue-400 h-full px-1.5 rounded-full items-center text-white"
                >
                  {child}
                </a>
              </li>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
