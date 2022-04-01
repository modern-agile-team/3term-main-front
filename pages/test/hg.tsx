import type { AppProps } from 'next/app';
import { cx, css } from '@emotion/css';
import Basic from '../../components/category/Basic';

const styles = css`
  font-size: 50px;
`;

function MyApp({}: AppProps) {
  return (
    <>
      <Basic>{'카테고리'}</Basic>
    </>
  );
}

export default MyApp;
