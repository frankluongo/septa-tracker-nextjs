import React from 'react';
import { Container } from './Container';
import { Header } from './Header';

export const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      <main>
        <Container>{children}</Container>
      </main>
      <footer>footer coming soon</footer>
    </>
  );
};
