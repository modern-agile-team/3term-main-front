import { css, cx } from '@emotion/css';

function Button(props) {
  console.log('props :>> ', props);
  const buttonStyle: object = {
    small: css`
      padding: 6px 8px;
      font-size: 10px;
    `,
  };
  const border = css`
    border: 1px solid hotpink;
  `;

  const back = css`
    background-color: teal;
  `;
  const back2 = css`
    background-color: hotpink;
  `;
  const show1 = () => {
    return (
      <button className={cx(buttonStyle.small, border, back2)}>
        {props.children}
      </button>
    );
  };
  const show2 = () => {
    return (
      <button className={cx(buttonStyle.small, border, back)}>
        {props.children}
      </button>
    );
  };

  const check = {
    all: show1(),
    border: show2(),
  };

  const show = () => {
    if (props.all) {
      return show1();
    } else if (props.border) {
      return show2();
    } else {
      return <button>{props.children}</button>;
    }
  };

  return (
    // <button className={cx(buttonStyle.small, border, back)}>
    //   {props.children}
    // </button>
    <>{show()}</>
  );
}
export default Button;
