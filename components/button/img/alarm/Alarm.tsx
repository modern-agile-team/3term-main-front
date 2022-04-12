import { css, cx } from '@emotion/css';
import { btnStyle, color, colors } from '../../../../style/palette';

export default function Alarm(props: object) {
  const commonStyle = btnStyle.square;

  const size = {
    big: css`
      ${commonStyle}
      width: 60px;
      height: 60px;
      background-color: ${colors.main};
      &:active {
        background-color: ${colors.dark};
      }
    `,
    small: css`
      ${commonStyle}
      width: 43px;
      height: 43px;
      background-color: ${colors.main};
      &:active {
        background-color: ${colors.dark};
      }
    `,
  };

  const event = {
    main: css`
      background-color: ${colors.main};
      &:active {
        background-color: ${colors.dark};
      }
    `,
    white: css`
      ${color.back(colors.white)}
      &:hover {
        background-color: ${colors.subtle};
      }
      &:active {
        background-color: ${colors.lighter};
      }
    `,
  };

  const disable = () => {
    return props.white
      ? css`
          cursor: unset;
          background-color: ${colors.white};
          &:hover {
            background-color: white;
          }
          &:active {
            background-color: white;
          }
        `
      : css`
          cursor: unset;
          background-color: ${colors.grayLight1};
          &:hover {
            background-color: ${colors.grayLight1};
          }
          &:active {
            background-color: ${colors.grayLight1};
          }
        `;
  };

  const check = {
    big: size.big,
    small: size.small,
    white: event.white,
    disable: disable(),
  };

  const finalStyle = Object.keys(props).map((attr) => check[attr]);

  const result = (
    <button className={cx(...finalStyle)}>{props.children}</button>
  );

  return <>{result}</>;
}
