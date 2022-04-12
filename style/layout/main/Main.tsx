import { css, cx } from '@emotion/css';

const main = css`
  grid-column-start: 5;
  grid-column-end: 21;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: light;
  position: relative;

  height: 900px;
`;

export default function Main(props: object) {
  return <div className={cx(main)}>{props.children}</div>;
}
