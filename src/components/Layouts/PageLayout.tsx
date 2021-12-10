import React, { PropsWithChildren, ReactNode } from 'react';
import { NextSeo } from 'next-seo';

interface PageMeta {
  name?: string;
  path: string;
}

type PageLayoutProps = PropsWithChildren<ReactNode> & PageMeta;

const PageLayout: React.FC<PageLayoutProps> = ({ name, path, children }) => {
  const title = name ? `On my list – ${name}` : 'On my list';
  const url = `https://onmylist.vercel.app/${path}`;

  return (
    <>
      <NextSeo
        title={title}
        canonical={url}
        openGraph={{
          url,
          title,
        }}
      />
      {children}
    </>
  );
};

export default PageLayout;
