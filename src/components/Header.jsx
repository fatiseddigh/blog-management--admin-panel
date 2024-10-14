"use client";

import { useAuth } from "@/context/AuthContext";
import NavLink from "./NavLink";

const navLinks = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "Blogs",
    path: "/blogs",
  },
];
const Header = () => {
  const { user, isLoading } = useAuth();

  return (
    <header
      className={`z-10 shadow-md bg-inherit mb-10 sticky top-0
         transition-all duration-200 border-b border-b-secondary-300 
         ${isLoading ? "blur-sm opacity-70" : "opacity-100 blur-0"}
      `}
    >
      <nav className="container xl:max-w-screen-xl">
        <ul className="flex items-center text-secondary-400 justify-between py-1">
          <div className="flex items-center gap-x-10">
            {navLinks.map((navLink) => {
              return (
                <li key={navLink.id}>
                  <NavLink path={navLink.path}>{navLink.name}</NavLink>
                </li>
              );
            })}
          </div>
          <li>
            {user ? (
              <NavLink path="/profile">Profile</NavLink>
            ) : (
              <NavLink path="/signin">Login</NavLink>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
