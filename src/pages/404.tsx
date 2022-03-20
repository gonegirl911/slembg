import { StaticImage } from "gatsby-plugin-image";
import React, { FC } from "react";
import Layout from "../components/Layout";

const NotFound: FC = () => {
	return (
		<Layout title="404" isBackgroundDark={true}>
			<div className="flex flex-col items-center justify-center relative min-h-screen text-primary-white">
				<StaticImage
					alt="Contacts background"
					src="../assets/images/404.jpg"
					className="absolute top-0 left-0 h-full -z-10"
				/>
				<h1 className="text-5xl sm:text-6xl font-bold">404</h1>
				<h2 className="text-2xl sm:text-3xl">Страницата не е намерена</h2>
			</div>
		</Layout>
	);
};

export default NotFound;
