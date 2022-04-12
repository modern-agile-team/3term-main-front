import React, { useState } from 'react';
import type { AppProps } from 'next/app';
import { css, cx } from '@emotion/css';
import { colors, color, fontSizes, fontWeights } from '../../style/palette';
import ImgFrame from '../../components/imgframe/ImgFrame';
import Profile from '../../components/icon/Profile';
import DivisionLine from '../../components/bar/DivisionLine';
import FocusBar from '../../components/bar/FocusBar';

function MyApp({}: AppProps) {
  const test = css`
    width: 1000px;
    height: 200px;
    border: 3px solid red;
  `;

  const test2 = css`
    width: 500px;
    height: 200px;
    border: 3px solid red;
  `;

  return (
    <>
      <div className={cx(test)}>
        <DivisionLine />
        <FocusBar />
      </div>
      <div className={cx(test2)}>
        <DivisionLine />
      </div>
    </>
  );
}

export default MyApp;
