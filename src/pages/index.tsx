import { navigate } from "gatsby";
import React, { FC, useEffect } from "react";
import Layout from "../components/Layout";

const Index: FC = () => {
	useEffect(() => {
		navigate("/contacts");
	}, []);

  return (
		<Layout title="Начало" selected="/">

		</Layout>
  );
};

export default Index;
