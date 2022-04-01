import type { AppProps } from 'next/app';
import { cx, css } from '@emotion/css';
import { Global } from '@emotion/react';

const styles = css`
  @font-face {
    font-family: 'Noto Sans KR';
    src: url('/fonts/NotoSansKR-Black.otf') format('otf'),
      url('/fonts/NotoSansKR-Bold.otf') format('otf'),
      url('/fonts/NotoSansKR-Light.otf') format('otf'),
      url('/fonts/NotoSansKR-Medium.otf') format('otf'),
      url('/fonts/NotoSansKR-Regular.otf') format('otf'),
      url('/fonts/NotoSansKR-Thin.otf') format('otf');
    unicode-range: U+AC00-D7A3;
  }
  * {
    font-size: 50px;
  }
`;

function MyApp({}: AppProps) {
  return (
    <>
      <Global styles={cx(styles)} />
      <div className={cx(styles)}>{'In English'}</div>
      <div className={cx(styles)}>{'한글일 때'}</div>
      <span className={cx(styles)}>{'In English'}</span>
      <br />
      <span className={cx(styles)}>{'한글일 때'}</span>
    </>
  );
}

export default MyApp;
