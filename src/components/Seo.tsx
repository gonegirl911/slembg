import React, { FC } from "react";

interface SeoProps {
  title: string;
  desc: string;
  isDark?: boolean;
  shouldRedirect?: boolean;
}

const Seo: FC<SeoProps> = ({ title, desc, isDark, shouldRedirect }) => (
  <>
    <html lang="en" />
    <meta name="description" content={desc} />
    <meta name="theme-color" content={isDark ? "#2f3642" : "#f3f4f6"} />
    {shouldRedirect && <meta http-equiv="refresh" content="0; url=/contacts" />}
    <title>{`СЛЕМ - ${title}`}</title>
    <body className={isDark ? "bg-primary-dark" : "bg-primary-light"} />
  </>
);

export default Seo;
