import { StaticImage } from "gatsby-plugin-image";
import React, { FC } from "react";
import Layout from "../components/Layout";

const NotFound: FC = () => {
	return (
		<Layout title="404" isBackgroundDark={true}>
			<div className="flex flex-col items-center justify-center relative min-h-screen">
				<StaticImage
					alt="Contacts background"
					src="../assets/images/404.jpg"
					className="absolute top-0 left-0 h-full -z-10"
				/>
				<h1 className="text-6xl font-bold text-primary-white">404</h1>
				<h2 className="text-3xl text-primary-white">Страницата не е намерена</h2>
			</div>
		</Layout>
	);
}

export default NotFound;
