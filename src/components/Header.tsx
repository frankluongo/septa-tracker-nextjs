import React from 'react';
import { Container } from './Container';

import css from '#styles/components/Header.module.css';
import { APP_NAME } from '#common/constants';

export const Header = () => {
  return (
    <header className={css.Header}>
      <Container>
        <section className={css.Logo}>{APP_NAME}</section>
      </Container>
    </header>
  );
};
