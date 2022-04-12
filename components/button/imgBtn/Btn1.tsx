import { css, cx, color, colors, btnStyle, shadows, propsType } from '../index';

function Btn1(props: propsType) {
  const commonSt = css`
    ${btnStyle.circle}
    width: 50px;
    height: 50px;
    padding: 10px;
    ${shadows.normal}
    ${color.back(colors.white)}
    position: fixed;
    bottom: 187px;
    right: 83px;
  `;

  const alram = css`
    ${btnStyle.circle}
    width: 25px;
    height: 25px;
    ${color.back(colors.main)}
    ${color.content(colors.white)}
    position: absolute;
    bottom: 33px;
    left: 33px;
  `;

  const event = css`
    &:hover {
      ${color.back(colors.subtle)}
    }
    &:active {
      ${color.back(colors.lighter)}
    }
  `;

  const disable = css`
    ${color.back(colors.grayLight1)}
    &:hover {
      ${color.back(colors.grayLight1)}
    }
    &:active {
      ${color.back(colors.grayLight1)}
    }
  `;

  const show = () => {
    return props.disable ? (
      <button className={cx(commonSt, event, disable)}>{props.children}</button>
    ) : (
      <button className={cx(commonSt, event)}>
        {props.children}
        <div className={cx(alram)}>{props.msg}</div>
      </button>
    );
  };

  return <>{show()}</>;
}

export default Btn1;
