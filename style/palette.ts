import { css } from '@emotion/css';

const color: object = {
  back: (color: string) =>
    css`
      background-color: ${color};
    `,
  content: (color: string) =>
    css`
      color: ${color};
    `,
};

const colors: object = {
  main: '#ff445e',
  dark: '#D12A41',
  lighter: '#FFA1AF',
  subtle: '#FCF3F4',
  errMain: '#FCF3F4',
  errDark: '#E53535',
  errLight: '#FF5C5C',
  errSubtle: '#FF5C5C',
  // warnMain: '#FFCC00',
  // warnDark: '#E5B800',
  // warnLight: '#FDDD48',
  // warnSubtle: '#FDED72',
  // infoMain: '#0063F7',
  // infoDark: '#004FC4',
  // infoLight: '#5B8DEF',
  // infoSubtle: '#9DBFF9',
  // successMain: '#FFCC00',
  // successDark: '#05A660',
  // successLight: '#39D98A',
  // successSubtle: '#57EBA1',
  'gray-dark1': '#4F4E5C',
  'gray-dark2': '#84838D',
  'gray-dark3': '#A7A7AD',
  'gray-dark4': '#CACACE',
  'gray-light1': '#E7E7E8',
  'gray-light2': '#EDEDEF',
  'gray-light3': '#F5F5F5',
  'gray-light4': '#F9F9F9',
  white: '#fff',
  black: '#000',
};

const fontSizes: object = {
  10: css`
    font-size: 10px;
  `,
  12: css`
    font-size: 12px;
  `,
  14: css`
    font-size: 14px;
  `,
  16: css`
    font-size: 16px;
  `,
  18: css`
    font-size: 18px;
  `,
  20: css`
    font-size: 20px;
  `,
  22: css`
    font-size: 22px;
  `,
  24: css`
    font-size: 24px;
  `,
  28: css`
    font-size: 28px;
  `,
  36: css`
    font-size: 36px;
  `,
  44: css`
    font-size: 44px;
  `,
};

const fontWeights: object = {
  light: css`
    font-weight: 300;
  `,
  normal: css`
    font-weight: 400;
  `,
  bold: css`
    font-weight: 700;
  `,
};

const shadows: object = {}; //성제

const buttonStyle: object = {}; //성제

const fontFamily: object = {}; //한결

const radius: object = {}; //한결

export { colors, color, fontSizes, fontWeights };
