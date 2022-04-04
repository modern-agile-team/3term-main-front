import { css, cx } from '@emotion/css';
import Header from './header/Header';
import Footer from './footer/Footer';
import Main from './main/Main';

const grid = css`
  display: grid;
  width: 100vw;
  min-width: 700px;
  align-items: center;
  grid-gap: 0.5px;
  grid-template-columns: repeat(24, 1fr);
  background-color: #f9f9f9;
`;

export default function Layout(props: object) {
  return (
    <div className={cx(grid)}>
      <Header>{'Header'}</Header>
      <Main>{props.children}</Main>
      <Footer>{'Footer'}</Footer>
    </div>
  );
}
