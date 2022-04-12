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

function Btn8(props: propsType) {
  const commonSt = css`
    ${btnStyle.square}
    height: 52px;
    ${color.back(colors.main)}
    ${color.content(colors.white)}
    ${fontSizes[14]}
    ${fontWeights.normal}
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
      width: 480px;
    `,
    small: css`
      width: 534px;
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

export default Btn8;
