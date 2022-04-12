import {
  css,
  cx,
  color,
  colors,
  btnStyle,
  fontSizes,
  fontWeights,
  propsType,
} from '.';

function MarkBox(props: propsType) {
  const commonSt = css`
    border-radius: 5px;
    border: 1px solid ${colors.main};
    /* background: url('dummy.jpg') no-repeat center/contain; */
    position: absolute;
    cursor: pointer;
    display: flex;
    justify-content: center;
  `;
  //------------------------------------------------------------------------------
  const boxSize = {
    // ?, ! 사이즈
    big: css`
      width: 28px;
      height: 28px;
    `,
    small: css`
      width: 22px;
      height: 22px;
    `,
  };

  const boxPosition = {
    // ?, ! 위치
    none: css``,
    right: css`
      top: 16px;
      right: 16px;
    `,
    moreRight: css`
      top: 8px;
      right: 8px;
    `,
  };
  //------------------------------------------------------------------------------

  const boxState = {
    // ?, ! 상태
    wantHelp: {
      able: css`
        ${color.back(colors.white)}
      `,
      disable: css`
        ${color.back(colors.white)}
        border: 1px solid ${colors.grayDark1};
      `,
    },
    willHelpU: {
      able: css`
        ${color.back(colors.main)}
      `,
      disable: css`
        ${color.back(colors.grayDark1)}
        border: 1px solid ${colors.grayDark1};
      `,
    },
  };

  const bubbleBox = css`
    ${btnStyle.square}
    ${color.back(colors.white)}
    ${color.content(colors.grayDark1)}
    ${fontSizes[14]}
    ${fontWeights.normal}
    padding: 16px;
    line-height: 26px;
    text-align: center;
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.25); // 팔레트 없는 쉐도우
    position: absolute;
    bottom: 20px;
    left: 20px;
  `;

  const hover = {
    wantHelp: css`
      :hover:after {
        ${bubbleBox}
        content: '!필요해요! 나에게 없는 재능이 필요하다면 도움을 요청해보세요.';
        width: 212px;
        height: 104px;
      }
    `,
    willHelpU: css`
      :hover:after {
        ${bubbleBox}
        content: '?필요해요? 내가 가진 재능이 필요한 사람이 있는지 물어보세요';
        width: 180px;
        height: 104px;
      }
    `,
  };

  const show = () => {
    <div
      className={cx(
        commonSt,
        boxSize.big,
        boxState.willHelpU.able,
        // hover.willHelpU,
        boxPosition.none
      )}
    >
      {props.children}
    </div>;
  };

  return (
    <div
      className={cx(
        commonSt,
        boxSize.big,
        boxState.willHelpU.able,
        hover.willHelpU,
        boxPosition.none
      )}
    >
      {props.children}
    </div>
  );
}

export default MarkBox;
