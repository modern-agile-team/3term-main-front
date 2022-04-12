import { css, cx } from '@emotion/css';
import {
  colors,
  color,
  fontSizes,
  fontWeights,
  radius,
} from '../../style/palette';

interface postItProps {
  board     ? : boolean
  userModal ? : boolean
  children  ? : string
}

function PostIt (props : postItProps) {

  const title = css`
    height: 27px;
    ${fontSizes[18]}
    ${fontWeights.bold}
    padding: 0px 0px 8px 0px;
  `

  const board = css`
  width: 400px;
  height: 170px;
  ${fontWeights.normal}
  position: relative;
  box-shadow: 0px 0px 5px 0 rgb(193, 193, 197);
  padding: 16px;
  outline: none;
  
  &:before {
    content: '';
    width: 60px;
    height: 60px;
    top: -30px;
    right: -30px;
    position: absolute;
    background: linear-gradient(
      to bottom left,
      white 0% 71.5%,
      rgb(227, 227, 227) 75% 
    );
  }
  `

  const userModal = css`
    width: 600px;
    height: 470px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `

  return (
    <>
      {props.board &&
      <div className={cx(
        board,
        color.content(colors.grayDark1),
        fontSizes[16],
      )}>
        <div className={cx(title)}>한 줄 요약</div>
        {props.children}
      </div>}

      {props.userModal &&
      <div className={cx(
        board,
        userModal
      )}>
        {props.children}
      </div>}
    </>
  )
}

export default PostIt