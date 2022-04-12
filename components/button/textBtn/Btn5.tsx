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

function Btn5(props: propsType) {
  const commonSt = css`
    ${btnStyle.square}
    width: 74px;
    height: 43px;
    ${color.back(colors.main)}
    ${color.content(colors.white)}
    ${fontSizes[14]}
    ${fontWeights.normal}
    ${shadows.normal}

    &:active {
      ${color.back(colors.dark)}
    }
  `;

  const disable = css`
    cursor: unset;
    &:active {
      ${color.back(colors.grayLight1)}
    }
  `;

  const show = () => {
    return props.disable ? (
      <button className={cx(commonSt, disable)}>{props.children}</button>
    ) : (
      <button className={cx(commonSt)}>{props.children}</button>
    );
  };
  return <>{show()}</>;
}

export default Btn5;
