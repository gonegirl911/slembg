import React, { FC } from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const Services: FC = () => <Layout path="/services" />;

export const Head: FC = () => (
  <Seo title="Дейности" desc="Дейности" shouldRedirect />
);

export default Services;
