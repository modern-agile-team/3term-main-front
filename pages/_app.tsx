import type { AppProps } from 'next/app';
import { injectGlobal, css, cx } from '@emotion/css';
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
  return (
    <>
      {/* <div>
        <Button style={'all'}>12</Button>
      </div>
      <br />
      <Button style={'border'}>12</Button>
      <br />
      <Button>12</Button> */}
      <div>
        <Button all>12</Button>
      </div>
      <br />
      <Button border>12</Button>
      <br />
      <Button>12</Button>
    </>
  );

  // 2. 배경 넘기고, 텍스트 넘긴다
  // color.back(색깔)
  // color.content(색깔)
}

export default MyApp;
