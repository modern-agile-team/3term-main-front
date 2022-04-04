import { css, cx } from '@emotion/css';
import {
  colors,
  color,
  fontSizes,
  fontWeights,
  radius,
} from '../../style/palette';

function Basic(props) {
  const commonCircleStyle = css`
    display: flex;
    justify-content: center;
    align-items: center;

    box-shadow: 0 0 8px 0 rgba(132, 131, 141, 0.5);
    /* 섀도우 스타일 수정 필요 */

    ${radius.circle}
    ${fontWeights.normal}
    ${color.content(colors.grayDark1)}
    ${color.back(colors.white)}
  `;

  const style: object = {
    largeCircle: css`
      ${commonCircleStyle};
      width: 160px;
      height: 160px;
      :hover {
        width: 180px;
        height: 180px;
        ${color.back(colors.subtle)}
      }
    `,
    mediumCircle: css`
      ${commonCircleStyle};
      width: 90px;
      height: 90px;
      box-shadow: 0px 0px 8px rgba(255, 68, 94, 0.25);
      /* 수정 필요 */
      :hover {
        ${color.back(colors.subtle)}
      }
    `,
    smallCircle: css`
      ${commonCircleStyle};
      width: 70px;
      height: 70px;
      :hover {
        width: 90px;
        height: 90px;
        ${color.back(colors.subtle)}
      }
    `,
    square: css`
    ${commonCircleStyle};
      width: 100px;
      height: 36px

      :hover {
        ${color.back(colors.subtle)}
      }
    `,
  };

  const circle = {
    large: (
      <button
        className={cx(
          style.largeCircle,

          fontSizes[16]
        )}
      >
        {props.children}
      </button>
    ),
    medium: (
      <button
        className={cx(
          style.mediumCircle,

          fontSizes[16]
        )}
      >
        {props.children}
      </button>
    ),
    small: (
      <button
        className={cx(
          style.smallCircle,

          fontSizes[16]
        )}
      >
        {props.children}
      </button>
    ),
  };

  const square = (
    <button
      className={cx(
        style.square,
        color.back(colors.white),
        color.content(colors.main),
        radius[6],
        fontSizes[14],
        fontWeights.normal
      )}
    >
      {props.children}
    </button>
  );

  if (props.largeCircle) {
    return <>{circle.large}</>;
  } else if (props.mediumCircle) {
    return <>{circle.medium}</>;
  } else if (props.smallCircle) {
    return <>{circle.small}</>;
  } else {
    return <span>{'속성 확인'}</span>;
  }
}

export default Basic;
