import { css, cx } from '@emotion/css';

function DivisionLine() {
  const commonStyle = css`
    width: 100%;
  `;

  return (
    <>
      <div className={cx(commonStyle)}></div>
    </>
  );
}

export default DivisionLine;
