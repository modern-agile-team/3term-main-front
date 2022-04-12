import type { AppProps } from 'next/app';
import { injectGlobal, cx, css } from '@emotion/css';
import Basic from '../../components/category/Basic';
import Alarm from '../../components/button/img/alarm/Alarm';

function MyApp({}: AppProps) {
  const pad = css`
    * {
      margin-bottom: 30px;
    }
  `;
  return (
    <>
      {/* <Basic largeCircle>{'카테고리'}</Basic>
      <Basic mediumCircle>{'카테고리'}</Basic>
      <Basic smallCircle>{'카테고리'}</Basic> */}
      <div className={cx(pad)}>
        <Alarm big>{'&'}</Alarm>
        <Alarm small />
        <Alarm big white>
          {'&'}
        </Alarm>
        <Alarm small white />
        <Alarm big disable>
          {'&'}
        </Alarm>
        <Alarm small white disable />
        {/* <Alarm big disable />
        <Alarm small disable /> */}
      </div>
      {/* <Basic smallSquare >{'카테고리'}</Basic>
      <Basic mediumSquare >{'카테고리'}</Basic>
      <Basic largeSquare >{'카테고리'}</Basic> */}
    </>
  );
}

export default MyApp;
