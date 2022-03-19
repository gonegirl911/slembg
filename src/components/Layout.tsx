import { Link } from "gatsby";
import React, { FC, useEffect, useState } from "react";
import Logo from "../assets/svg/logo_extended.svg";
import "../styles/global.css";

const pages = {
	"/": "Начало",
	"/services": "Дейности",
	"/contacts": "Контакти",
};

interface LayoutProps {
  title: string;
	selected?: keyof typeof pages;
	isBackgroundDark?: boolean;
}

const Layout: FC<LayoutProps> = ({ title, selected, isBackgroundDark, children }) => {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > 0);
		window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
	}, []);

	return (
		<>
			<title>{`СЛЕМ - ${title}`}</title>
			<nav className={`grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] items-center fixed top-0 left-0 w-full z-10 ${isScrolled && "bg-white drop-shadow"}`}>
				<div className="mx-6 hidden sm:block">
					<Link to="/">
						<img src={Logo} alt="Logo" className="h-8" />
					</Link>
				</div>
				<div className="justify-self-center flex my-3">
					{Object.entries(pages).map(([path, title]) => (
						<Link to={path} className={`flex px-4 py-2 rounded-md bg-opacity-5 ${isBackgroundDark && !isScrolled && "text-gray-100"} ${path === selected && "bg-black"}`}>
							{title}
						</Link>
					))}
				</div>
			</nav>
			<main>
				{children}
			</main>
		</>
	);
};

export default Layout;
