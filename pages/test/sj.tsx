import type { AppProps } from 'next/app';
import { css } from '@emotion/css';
import Mosaic from '../../components/mosaic/Mosaic';
import PostIt from '../../components/box/PostIt';
import img1 from '../../public/img1.jpeg'
import WhiteBtn from '../../components/button/whiteBtn/WhiteBtn';

function MyApp({}: AppProps) {

  return (
    <>
      <WhiteBtn w87h44 >{'텍스트'}</WhiteBtn>
    </>
  );
}

export default MyApp;
