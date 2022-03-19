import { navigate } from "gatsby";
import React, { FC, useEffect } from "react";
import Layout from "../components/Layout";

const Services: FC = () => {
	useEffect(() => {
		navigate("/contacts");
	}, []);

  return (
		<Layout title="Услуги" selected="/services">

		</Layout>
  );
};

export default Services;
