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

function Btn11(props: propsType) {
  const commonSt = css`
    ${btnStyle.square}
    height: 40px;
    ${color.back(colors.main)}
    ${color.content(colors.white)}
    ${fontSizes[12]}
    ${fontWeights.bold}
    ${shadows.normal}

    &:active {
      ${color.back(colors.dark)}
    }
  `;

  interface sizeType {
    [attr: string]: string;
  }

  const size: sizeType = {
    big: css`
      width: 300px;
    `,
    small: css`
      width: 86px;
    `,
  };

  const disable = css`
    cursor: unset;
    ${color.back(colors.grayLight1)}
    &:active {
      ${color.back(colors.grayLight1)}
    }
  `;

  const attrProps = [...Object.keys(props).map(attr => size[attr])];

  const show = () => {
    return (
      <>
        {props.disable ? (
          <button className={cx(commonSt, attrProps, disable)}>
            {props.children}
          </button>
        ) : (
          <button className={cx(commonSt, attrProps)}>{props.children}</button>
        )}
      </>
    );
  };

  return <>{show()}</>;
}

export default Btn11;
