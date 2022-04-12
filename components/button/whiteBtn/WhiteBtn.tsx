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
  children  : string
  w43h43  ? : boolean
  w60h60  ? : boolean
  w87h44  ? : boolean
  w80h20  ? : boolean
  w100h36 ? : boolean
  w100h43 ? : boolean
  w138h44 ? : boolean
}

function WhiteBtn (props: propsTypes) {

  const hoverSt = css`
    &:hover {
      background-color: ${colors.subtle};
    }
  `

  return (
    <>
      {props.w43h43 && 
      <button className={cx(
        whiteBtnSt.w43h43,
        hoverSt
      )}>{props.children}</button>}

      {props.w60h60 &&
      <button className={cx(
        whiteBtnSt.w60h60,
        hoverSt
      )}>{props.children}</button>}

      {props.w80h20 &&
      <button className={cx(
        whiteBtnSt.w80h20,
        hoverSt
      )}>{props.children}</button>}

      {props.w87h44 &&
      <button className={cx(
        whiteBtnSt.w87h44,
        hoverSt
      )}>{props.children}</button>}

      {props.w100h36 &&
      <button className={cx(
        whiteBtnSt.w100h36,
        hoverSt
      )}>{props.children}</button>}

      {props.w100h43 &&
      <button className={cx(
        whiteBtnSt.w100h43,
        hoverSt
      )}>{props.children}</button>}

      {props.w138h44 &&
      <button className={cx(
        whiteBtnSt.w138h44,
        hoverSt
      )}>{props.children}</button>}
    </>
  )
}

export default WhiteBtn