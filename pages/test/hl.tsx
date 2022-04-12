import React, { useState } from 'react';
import type { AppProps } from 'next/app';
import { css, cx } from '@emotion/css';
import { colors, color, fontSizes, fontWeights } from '../../style/palette';
import ImgFrame from '../../components/imgframe/ImgFrame';
import Profile from '../../components/icon/Profile';

function MyApp({}: AppProps) {
  const test = css`
    width: 200px;
    height: 200px;
    background-color: red;
    background: url('/img1.jpeg') no-repeat center/cover;
  `;

  const [isLogin, setIsLogin] = useState(false);

  const loginHandler = () => setIsLogin(!isLogin);

  console.log('isLogin :>> ', isLogin);

  return (
    <>
      {/* <div className={cx(fontSizes[12], fontWeights.bold)}>12px bold</div>
      <ImgFrame contain closeBtn />
      <ImgFrame contain closeBtn numIcon /> */}
      <button onClick={loginHandler}>Click</button>
      <Profile isLogin={isLogin} size43 />
      <Profile isLogin={isLogin} size45 />
      <Profile isLogin={isLogin} size60 />
      <Profile isLogin={isLogin} size146 />
      <Profile isLogin={isLogin} size150 />
      <Profile isLogin={isLogin} size160 />
    </>
  );
}

export default MyApp;
