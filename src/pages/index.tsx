import React, { FC } from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const Index: FC = () => (
  <Layout path="/">
  </Layout>
);

export const Head: FC = () => <Seo title="Начало" desc="Начало" />;

export default Index;
