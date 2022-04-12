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

function Btn12(props: propsType) {
  const commonSt = css`
    ${btnStyle.square}
    height: 44px;
    ${color.back(colors.white)}
    ${color.content(colors.grayDark1)}
    ${fontSizes[14]}
    ${fontWeights.normal}
    ${shadows.button}

    &:active {
      ${color.back(colors.subtle)}
      ${color.content(colors.white)}
    }
  `;

  interface sizeType {
    [attr: string]: string;
    big: string;
    small: string;
  }

  const size: sizeType = {
    big: css`
      width: 138px;
    `,
    small: css`
      width: 87px;
    `,
  };

  const disable = css`
    cursor: unset;
    ${color.content(colors.grayLight1)}
    &:active {
      ${color.back(colors.white)}
      ${color.content(colors.grayLight1)}
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

export default Btn12;
