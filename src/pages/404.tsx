import { StaticImage } from "gatsby-plugin-image";
import React, { FC } from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const NotFound: FC = () => (
  <Layout
    path="/404"
    image={
      <StaticImage
        src="../assets/images/404.jpg"
        alt="Тъжен робот"
        className="absolute top-0 left-0 h-full -z-10 text-transparent"
      />
    }
    isDark
  >
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-5xl sm:text-6xl font-bold">404</h1>
      <h2 className="text-2xl sm:text-3xl">Страницата не е намерена</h2>
    </div>
  </Layout>
);

export const Head: FC = () => <Seo title="404" desc="404" isDark />;

export default NotFound;
