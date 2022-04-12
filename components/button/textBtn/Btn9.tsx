import { deflate } from 'zlib';
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

function Btn9(props: propsType) {
  const commonSt = css`
    ${btnStyle.square}
    width: 80px;
    height: 28px;
    ${color.back(colors.white)}
    ${color.content(colors.main)}
    ${fontSizes[12]}
    ${fontWeights.normal}
    ${shadows.normal}

    &:hover {
      ${color.back(colors.subtle)}
    }
    &:active {
      ${color.back(colors.lighter)}
    }
  `;

  const disable = css`
    cursor: unset;
    ${color.content(colors.grayLight1)}
    &:hover {
      ${color.back(colors.white)}
    }
    &:active {
      ${color.back(colors.white)}
    }
  `;

  const show = () => {
    return (
      <>
        {props.disable ? (
          <button className={cx(commonSt, disable)}>{props.children}</button>
        ) : (
          <button className={cx(commonSt)}>{props.children}</button>
        )}
      </>
    );
  };

  return <>{show()}</>;
}

export default Btn9;
