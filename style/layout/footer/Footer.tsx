import { css, cx } from '@emotion/css';

const footer = css`
  grid-column-start: 1;
  grid-column-end: 25;
  box-shadow: 0px 0px 8px rgba(132, 131, 141, 0.5);

  height: 150px;

  display: grid;
  grid-template-columns: repeat(24, 1fr);
  background-color: white;
`;

const content = css`
  grid-column-start: 5;
  grid-column-end: 21;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export default function Footer(props: object) {
  return (
    <>
      <div className={cx(footer)}>
        <div className={cx(content)}>{props.children}</div>
      </div>
    </>
  );
}
