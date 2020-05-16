import React from 'react';
import styled, { css } from 'styled-components';

import Layout from '../components/Layout';
import Component from '../components/Tags';
import { useTheme } from '../hooks/theme';
import { IThemeProps } from '../styles/themes';

const Container = styled.div(
  ({ theme, dark }: IThemeProps) => css`
    padding: 15px;
    border-radius: 0.5rem;
    background-color: ${dark
      ? theme.colors.secundaryDark
      : theme.colors.secundaryWhite};
  `,
);

const Tags: React.FC = () => {
  const { dark } = useTheme();

  return (
    <Layout showSidebar={false}>
      <Container dark={dark}>
        <h1>Assuntos já abordados no blog:</h1>
        <Component />
      </Container>
    </Layout>
  );
};

export default Tags;
