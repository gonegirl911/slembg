import { Link } from "gatsby";
import React, { FC, ReactNode, useEffect, useState } from "react";
import Logo from "../../assets/svg/extended_logo.svg";
import "../styles/global.css";

export const navigationTabs = {
  "/": "Начало",
  "/services": "Дейности",
  "/contacts": "Контакти",
} as const;

interface LayoutProps {
  path: keyof typeof navigationTabs | "/404";
  image?: ReactNode;
  isDark?: boolean;
  children?: ReactNode | undefined;
}

const Layout: FC<LayoutProps> = ({ path, image, isDark, children }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(document.body.scrollTop > 0);
    document.body.addEventListener("scroll", handleScroll);
    return () => document.body.removeEventListener("scroll", handleScroll);
  }, []);

  const textColor = isDark ? "text-primary-light" : "text-primary-dark";
  const bgColor = isDark
    ? "bg-primary-dark drop-shadow"
    : "bg-primary-light drop-shadow";

  return (
    <>
      <nav
        className={`grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] items-center fixed top-0 left-0 w-full z-10 ${textColor} ${
          isScrolled && bgColor
        }`}
      >
        <div className="mx-6 hidden sm:flex">
          <Link to="/">
            <img src={Logo} alt="Лого" className="h-8" />
          </Link>
        </div>
        <div className="justify-self-center flex my-3">
          {Object.entries(navigationTabs).map(([to, title]) => (
            <Link
              to={to}
              key={title}
              className={`px-4 py-2 rounded-md ${
                to === path && "bg-black bg-opacity-5"
              }`}
            >
              {title}
            </Link>
          ))}
        </div>
      </nav>
      <main className={`relative ${textColor}`}>
        {image || <div className="absolute top-0 left-0 h-full -z-10" />}
        {children}
      </main>
    </>
  );
};

export default Layout;
