import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import { COLORS } from '../../themes/light.theme';

const globalStyle = createGlobalStyle`
  ${normalize};

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    font-family: 'Regular', 'Light', 'Helvetica', sans-serif;
    overflow-x: hidden;

    -webkit-tap-highlight-color: transparent;
  }

  button {
    padding: 0;
    margin: 0;
    background-color: transparent;
    border: 0;
    outline: none;
    user-select: none;
    cursor: pointer;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  img {
    max-width: 100%;
    user-select: none;
  }

  p {
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: normal;
  }

  ::selection {
    color: ${COLORS.primary};
    background-color: ${COLORS.secondary};
  }
`;

export default globalStyle;
