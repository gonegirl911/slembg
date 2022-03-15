import React, { FC } from "react";

interface LayoutProps {
  title: string;
}

const Layout: FC<LayoutProps> = ({ title, children }) => {
	return (
		<>
			<title>{`СЛЕМ - ${title}`}</title>
			<main>
				{children}
			</main>
		</>
	);
};

export default Layout;
