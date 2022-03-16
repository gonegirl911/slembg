import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React, { FC } from "react";
import "../styles/global.css";

interface LayoutProps {
  title: string;
	selected: "index" | "services" | "contacts";
}

const Layout: FC<LayoutProps> = ({ title, selected, children }) => {
	return (
		<>
			<title>{`СЛЕМ - ${title}`}</title>
			<nav className="flex p-3 sticky top-0 items-center border-b-2">
				<Link to="/">
					<StaticImage
						alt="Logo"
						src="../assets/logo.png"
						className="w-16 m-3"
					/>
				</Link>
				<ul className="flex p-6 gap-6 text-gray-500 text-lg">
					<li className={`${selected == "index" && "text-primary-blue"}`}>
						<Link to="/">
							Начало
						</Link>
					</li>
					<li className={`${selected == "services" && "text-primary-blue"}`}>
						<Link to="/services">
							Услуги
						</Link>
					</li>
					<li className={`${selected == "contacts" && "text-primary-blue"}`}>
						<Link to="/contacts">
							Контакти
						</Link>
					</li>
				</ul>
			</nav>
			<main>
				{children}
			</main>
		</>
	);
};

export default Layout;
