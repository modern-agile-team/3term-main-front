import React from "react";
import { css, cx } from "@emotion/css";
import { 
  colors,
  color,
  fontSizes,
  fontWeights,
  radius,
  imgBtnSt,
  textBtnSt,
  whiteBtnSt
} from "../../../style/palette";

interface propsTypes {
  children : String
  w43h43 ? : String
  w60h60 ? : string
}

function ImgBtn (props: propsTypes) {

  const cursorSt = css`
    cursor: pointer;
  `

  return (
    <>
    {props.w43h43 &&
    <button className={cx(
      imgBtnSt.w43h43,
      cursorSt
    )}>{props.children}</button>}

    {props.w60h60 &&
    <button className={cx(
      imgBtnSt.w60h60,
      cursorSt
    )}>{props.children}</button>}
    </>
  )
}

export default ImgBtn;