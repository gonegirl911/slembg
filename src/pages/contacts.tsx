import { StaticImage } from "gatsby-plugin-image";
import React, { FC } from "react";
import Layout from "../components/Layout";
import Profile from "../components/Profile";
import Seo from "../components/Seo";

const Contacts: FC = () => (
  <Layout
    path="/contacts"
    image={
      <StaticImage
        src="../../assets/images/contacts.jpg"
        alt="Телефони"
        className="absolute top-0 left-0 h-full -z-10 text-transparent"
      />
    }
  >
    <div className="flex flex-row wide:flex-col justify-center min-h-screen">
      <div className="flex flex-col wide:flex-row justify-evenly mt-16 wide:mt-0">
        <Profile
          name="Слав Славов - управител"
          phone="+359 888 478 588"
          email="techsis_ood@abv.bg"
          services={[
            "Видеонаблюдение",
            "Контрол на достъп",
            "Алармени системи",
            "Пожароизвестяване",
          ]}
        />
        <Profile
          name="Никола Митев - управител"
          phone="+359 884 059 179"
          email="nikmit@abv.bg"
          services={["Домофонни системи", "Портална автоматика"]}
        />
      </div>
    </div>
  </Layout>
);

export const Head: FC = () => <Seo title="Контакти" desc="Контакти" />;

export default Contacts;
