import PostIt from './PostIt';

export { PostIt };

export { css, cx } from '@emotion/css';

export {
  color,
  colors,
  btnStyle,
  shadows,
  fontSizes,
  fontWeights,
  radius,
} from '../../style/palette';

export interface propsType {
  [props: string]: boolean | undefined | string | number;
}
