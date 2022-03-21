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
	isDark?: boolean;
}

const Layout: FC<LayoutProps> = ({ title, selected, isDark, children }) => {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > 0);
		window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const textColor = isDark ? "text-primary-light" : "text-primary-dark";
	const bgColor = isDark ? "bg-primary-dark drop-shadow" : "bg-primary-light drop-shadow";

	return (
		<>
			<title>{`СЛЕМ - ${title}`}</title>
			<nav className={`grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] items-center fixed top-0 left-0 w-full z-10 transition-all duration-100 ${textColor} ${isScrolled && bgColor}`}>
				<div className="mx-6 hidden sm:flex">
					<Link to="/">
						<img src={Logo} alt="Logo" className="h-8" />
					</Link>
				</div>
				<div className="justify-self-center flex my-3">
					{Object.entries(pages).map(([path, title]) => (
						<Link to={path} className={`flex px-4 py-2 rounded-md ${path === selected && "bg-black bg-opacity-5"}`}>
							{title}
						</Link>
					))}
				</div>
			</nav>
			<main className={`relative ${textColor}`}>
				{children}
			</main>
		</>
	);
};

export default Layout;
