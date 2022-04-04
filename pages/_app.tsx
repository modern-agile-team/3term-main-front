import type { AppProps } from 'next/app';
import { injectGlobal, css, cx } from '@emotion/css';
import Layout from '../style/layout/index';

injectGlobal`
* {
  outline: none;
  border: none;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: 'Noto Sans KR', sans-serif;
}
& button {
  cursor: pointer;
}
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
