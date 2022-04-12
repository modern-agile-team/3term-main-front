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

function Btn6(props: propsType) {
  const commonSt = css`
    ${btnStyle.square}
    width: 100px;
    height: 43px;
    ${fontSizes[14]}
    ${fontWeights.normal}
    ${shadows.normal}
  `;

  interface difStType {
    [style: string]: {
      [color: string]: string;
    };
  }

  const difSt: difStType = {
    main: {
      able: css`
        ${color.back(colors.main)}
        ${color.content(colors.white)}
      &:active {
          ${color.back(colors.dark)}
        }
      `,
      disable: css`
        cursor: unset;
        ${color.back(colors.grayLight1)}
        ${color.content(colors.white)}
        &:hover {
          ${color.back(colors.grayLight1)}
        }
        &:active {
          ${color.back(colors.grayLight1)}
        }
      `,
    },
    white: {
      able: css`
        ${color.back(colors.white)}
        ${color.content(colors.main)}
      &:hover {
          ${color.back(colors.subtle)}
        }
        &:active {
          ${color.back(colors.lighter)}
        }
      `,
      disable: css`
        cursor: unset;
        ${color.back(colors.white)}
        ${color.content(colors.grayLight1)}
      &:hover {
          ${color.back(colors.white)}
        }
        &:active {
          ${color.back(colors.white)}
        }
      `,
    },
  };

  interface funcType {
    (color: string): string;
  }

  function mapFunc(color: string) {
    return props.disable === undefined
      ? Object.keys(props).map(() => difSt[color].able)
      : props.disable && Object.keys(props).map(() => difSt[color].disable);
  }

  const show = () => {
    return (
      <>
        {props.main ? (
          <button className={cx(commonSt, mapFunc('main'))}>
            {props.children}
          </button>
        ) : (
          <button className={cx(commonSt, mapFunc('white'))}>
            {props.children}
          </button>
        )}
      </>
    );
  };

  return <>{show()}</>;
}

export default Btn6;
