import {
  css,
  cx,
  color,
  colors,
  btnStyle,
  shadows,
  fontSizes,
  fontWeights,
  propsType,
} from '../index';

function Btn4(props: propsType) {
  const commonSt = css`
    ${btnStyle.square}
    ${shadows.normal}
  `;

  const size = {
    big: css`
      ${commonSt}
      width: 60px;
      height: 60px;
    `,
    small: css`
      ${commonSt}
      width: 43px;
      height: 43px;
    `,
  };

  const event = {
    main: css`
      ${color.back(colors.main)}

      &:active {
        ${color.back(colors.dark)}
      }
    `,
    white: css`
      ${color.back(colors.white)}
      &:hover {
        ${color.back(colors.subtle)}
      }
      &:active {
        ${color.back(colors.lighter)}
      }
    `,
  };

  const disable = {
    main: css`
      cursor: unset;
      ${color.back(colors.grayLight1)}
      &:hover {
        ${color.back(colors.grayLight1)}
      }
      &:active {
        ${color.back(colors.grayLight1)}
      }
    `,
    white: css`
      cursor: unset;
      ${color.back(colors.white)}
      &:hover {
        ${color.back(colors.white)}
      }
      &:active {
        ${color.back(colors.white)}
      }
    `,
  };

  const checking = () => {
    const styles = [];
    if (props.big) {
      styles.push(size.big);
    } else {
      styles.push(size.small);
    }
    if (props.white) {
      styles.push(event.white);
    } else {
      styles.push(event.main);
    }
    if (props.disable) {
      props.white ? styles.push(disable.white) : styles.push(disable.main);
    }
    return styles;
  };

  return <button className={cx(...checking())}>{props.children}</button>;
}

export default Btn4;
