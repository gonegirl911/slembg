import { Link } from "gatsby";
import React, { FC, useEffect, useState } from "react";
import Logo from "../assets/svg/logo_extended.svg";
import "../styles/global.css";

const navigationTabs = {
	"/": "Начало",
	"/services": "Дейности",
	"/contacts": "Контакти",
} as const;

interface LayoutProps {
	path: string;
	title: string;
	image?: React.ReactNode;
	isDark?: boolean;
}

const Layout: FC<LayoutProps> = ({ path, title, image, isDark, children }) => {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > 0);
		window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const themeColor = isDark ? "#2F3642" : "#f3f4f6";
	const textColor = isDark ? "text-primary-light" : "text-primary-dark";
	const bgColor = isDark ? "bg-primary-dark drop-shadow" : "bg-primary-light drop-shadow";

	return (
		<>
			<meta name="theme-color" content={themeColor} />
			<title>{`СЛЕМ - ${title}`}</title>
			<nav className={`grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] items-center fixed top-0 left-0 w-full z-10 ${textColor} ${isScrolled && bgColor}`}>
				<div className="mx-6 hidden sm:flex">
					<Link to="/">
						<img src={Logo} alt="Logo" className="h-8" />
					</Link>
				</div>
				<div className="justify-self-center flex my-3">
					{Object.entries(navigationTabs).map(([to, title]) => (
						<Link to={to} key={title} className={`flex px-4 py-2 rounded-md ${to === path && "bg-black bg-opacity-5"}`}>
							{title}
						</Link>
					))}
				</div>
			</nav>
			<main className={`relative ${textColor}`}>
				{image || <div className="absolute top-0 left-0 h-full -z-10"/>}
				{children}
			</main>
		</>
	);
};

export default Layout;
