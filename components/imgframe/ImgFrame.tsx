import { css, cx } from '@emotion/css';

function ImgFrame(props) {
  const commonStyle = css`
    position: relative;
    background: white no-repeat center;
  `;

  const imgStyle = () => {
    return props.cover
      ? css`
          position: relative;
          width: 400px;
          height: 200px;
          background: url('/img1.jpeg');
          background-repeat: no-repeat;
          background-size: cover;
        `
      : css`
          ${commonStyle}
          width: 400px;
          height: 200px;
          background-image: url('/img1.jpeg');
          background-size: contain;
        `;
  };

  const imgRadius: object = {};

  const icon = {
    closeBtn: css`
      &::before {
        content: '';
        position: absolute;
        top: 20px;
        right: 20px;
        width: 20px;
        height: 20px;
        background: url('/img2.png') no-repeat center/cover;
      }
    `,

    numIcon: css`
      &::after {
        content: '';
        position: absolute;
        width: 20px;
        height: 20px;
        bottom: 20px;
        right: 20px;
        background: url('/img2.png') no-repeat center/cover;
      }
    `,
  };

  const check = {
    closeBtn: icon.closeBtn,
    numIcon: icon.numIcon,
    cover: imgStyle(),
    contain: imgStyle(),
  };

  const finalStyle = Object.keys(props).map((attr) => check[attr]);

  return <div className={cx(...finalStyle)}></div>;
}

export default ImgFrame;
