import type { AppProps } from 'next/app';
import { injectGlobal, css, cx } from '@emotion/css';
import styled from '@emotion/styled';
import { colors, color } from '../style/palette';
import Button from '../components/button/Button';

injectGlobal`
* {
  outline: none;
  border: none;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
& button {
  cursor: pointer;
}
`;

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;

  // 2. 배경 넘기고, 텍스트 넘긴다
  // color.back(색깔)
  // color.content(색깔)
}

export default MyApp;
