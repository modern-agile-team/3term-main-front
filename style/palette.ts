import { css } from '@emotion/css';
import { type } from 'os';

interface colorFuncType {
  back   (color: string) : string,
  content(color: string) : string
}

const color: colorFuncType = {
  back: (color) =>
    css`
      background-color: ${color};
    `,
  content: (color) =>
    css`
      color: ${color};
    `,
};

interface colorsType {
  main      : string
  dark      : string
  lighter   : string
  subtle    : string
  errMain   : string
  errDark   : string
  errLight  : string
  errSubtle : string
  grayDark1 : string
  grayDark2 : string
  grayDark3 : string
  grayDark4 : string
  grayLight1: string
  grayLight2: string
  grayLight3: string
  grayLight4: string
  white     : string 
  black     : string
}

const colors: colorsType = {
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
  grayDark1: '#4F4E5C',
  grayDark2: '#84838D',
  grayDark3: '#A7A7AD',
  grayDark4: '#CACACE',
  grayLight1: '#E7E7E8',
  grayLight2: '#EDEDEF',
  grayLight3: '#F5F5F5',
  grayLight4: '#F9F9F9',
  white: '#fff',
  black: '#000',
};

interface fontSizeType {
  10: string
  12: string
  14: string
  16: string
  18: string
  20: string
  22: string
  24: string
  28: string
  36: string
  44: string
}

interface radiusType {
  5     : string
  6     : string
  24    : string
  circle: string
}

const radius: radiusType = {
  5: css`
    border-radius: 5px;
  `,
  6: css`
    border-radius: 6px;
  `,
  24: css`
    border-radius: 24px;
  `,
  circle: css`
    border-radius: 50%;
  `,
};

const fontSizes: fontSizeType = {
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

interface fontWeightType {
  normal: string
  light : string
  bold  : string
}

const fontWeights: fontWeightType = {
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

interface shadowType {
  normal        : string
  mainColor     : string
  small         : string
  input         : string
  inputMainColor: string
}

const shadows: shadowType = {
  normal: css`
  box-shadow: 0px 0px 8px rgba(132, 131, 141, 0.5);
  `,
  mainColor: css`
  box-shadow: 0px 0px 4px rgba(255, 68, 94, 0.25);
  `,
  small: css`
  box-shadow: 0px 0px 4px rgba(132, 131, 141, 0.25);
  `,
  input: css`
  box-shadow: inset 0px 0px 8px rgba(132, 131, 141, 0.2);
  `,
  inputMainColor: css`
  box-shadow: inset 0px 0px 8px rgba(255, 68, 94, 0.2);
  `,
};

interface imgBtnType {
  w43h43 : string
  w60h60 : string
}

const imgBtnSt: imgBtnType = {
  w43h43: css`  //style4
  width: 43px;
  height: 43px;
  ${shadows.normal};
  background-color: ${colors.main};
  ${radius[6]}
  `,
  w60h60: css`
  width: 60px;  //style4
  height: 60px;
  ${shadows.normal};
  background-color: ${colors.main};
  ${radius[6]}
  `,
};

interface textBtnType {
  w74h43   : string
  w100h43  : string
  w170h43  : string
  w480h534 : string
  w534h534 : string
  w86h40   : string
  w300h40  : string
}

const textBtnSt: textBtnType = {
  w74h43: css` //style5
  width: 74px;
  height: 43px;
  ${fontSizes[14]}
  ${fontWeights.normal}
  background-color: ${colors.main};
  ${shadows.normal}
  ${radius[6]}
  `,
  w100h43: css`  //style6
  width: 100px;
  height: 43px;
  ${fontSizes[14]}
  ${fontWeights.normal}
  background-color: ${colors.main};
  ${shadows.normal}
  ${radius[6]}
  `,
  w170h43: css`  //style7
  width: 170px;
  height: 43px;
  ${fontSizes[14]}
  ${fontWeights.normal}
  background-color: ${colors.main};
  ${shadows.normal}
  ${radius[6]}
  `,
  w480h534: css` //style8
  width: 480px;
  height: 534px;
  ${fontSizes[14]}
  ${fontWeights.normal}
  background-color: ${colors.main};
  ${shadows.normal}
  ${radius[6]}
  `,
  w534h534: css` //style8
  width: 534px;
  height: 534px;
  ${fontSizes[14]}
  ${fontWeights.normal}
  background-color: ${colors.main};
  ${shadows.normal}
  ${radius[6]}
  `,
  w86h40: css` //style11
  width: 86px;
  height: 40px;
  ${fontSizes[12]}
  ${fontWeights.bold}
  background-color: ${colors.main};
  ${shadows.normal}
  ${radius[6]}
  `,
  w300h40: css`  //style11
  width: 300px;
  height: 40px;
  ${fontSizes[12]}
  ${fontWeights.bold}
  background-color: ${colors.main};
  ${shadows.normal}
  ${radius[6]}
  `,
};

interface whiteBtnType extends imgBtnType {
  w100h43 : string
  w80h20  : string
  w100h36 : string
  w87h44  : string
  w138h44 : string
}

const whiteBtnSt: whiteBtnType = {
  w43h43: css`  //style4
  width: 43px;
  height: 43px;
  ${shadows.normal};
  background-color: ${colors.white};
  ${radius[6]}
  `,
  w60h60: css`
  width: 60px;  //style4
  height: 60px;
  ${shadows.normal};
  background-color: ${colors.white};
  ${radius[6]}
  `,
  w100h43: css`  //style6
  width: 100px;
  height: 43px;
  ${fontSizes[14]}
  ${fontWeights.normal}
  background-color: ${colors.white};
  ${shadows.normal}
  ${radius[6]}
  `,
  w80h20: css` //style9
  width: 80px;
  height: 28px;
  ${fontSizes[12]}
  ${fontWeights.normal}
  background-color: ${colors.white};
  ${shadows.normal}
  ${radius[6]}
  `,
  w100h36: css`  //style10
  width: 100px;
  height: 36px;
  ${fontSizes[14]}
  ${fontWeights.normal}
  background-color: ${colors.white};
  ${shadows.normal}
  ${radius[6]}
  `,
  w87h44: css` //style12
  width: 87px;
  height: 44px;
  ${fontSizes[12]}
  ${fontWeights.normal}
  background-color: ${colors.white};
  ${shadows.small}
  ${radius[6]}
  `,
  w138h44: css` //style12
  width: 138px;
  height: 44px;
  ${fontSizes[12]}
  ${fontWeights.normal}
  background-color: ${colors.white};
  ${shadows.small}
  ${radius[6]}
  `,
}

const fontFamily: object = {
  // injectGlobal 에 적용 실패
};

export { colors, color, fontSizes, fontWeights, radius, imgBtnSt, textBtnSt, whiteBtnSt };