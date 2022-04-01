import { css, cx } from '@emotion/css';
import {
  colors,
  color,
  fontSizes,
  fontWeights,
  radius,
} from '../../style/palette';

function Basic(props) {
  const category = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 160px;
    height: 160px;

    box-shadow: 0 0 8px 0 rgba(132, 131, 141, 0.5);
    /* 섀도우 스타일 정리되면 교체 */

    :hover {
      width: 180px;
      height: 180px;
      ${color.back(colors.subtle)}
    }
  `;
  return (
    <button
      className={cx(
        category,
        color.back(colors.white),
        color.content(colors.grayDark1),
        radius.circle,
        fontSizes[16],
        fontWeights.normal
      )}
    >
      {props.children}
    </button>
  );
}

export default Basic;
