import React from "react";
import { css,cx } from "@emotion/css";
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

interface porpsTypes {
  children   : string
  w74h43   ? : boolean
  w86h40   ? : boolean
  w100h43  ? : boolean
  w170h43  ? : boolean
  w300h40  ? : boolean
  w480h534 ? : boolean
  w534h534 ? : boolean
}

function TextBtn (props: porpsTypes) {

  const cursorSt = css`
    cursor: pointer;
  `

  return (
    <>
      {props.w74h43 && <button className={cx(
        textBtnSt.w74h43,
        cursorSt
      )}>{props.children}</button>}

      {props.w86h40 && <button className={cx(
        textBtnSt.w86h40,
        cursorSt
      )}>{props.children}</button>}

      {props.w100h43 && <button className={cx(
        textBtnSt.w100h43,
        cursorSt
      )}>{props.children}</button>}

      {props.w170h43 && <button className={cx(
        textBtnSt.w170h43,
        cursorSt
      )}>{props.children}</button>}

      {props.w300h40 && <button className={cx(
        textBtnSt.w300h40,
        cursorSt
      )}>{props.children}</button>}

      {props.w480h534 && <button className={cx(
        textBtnSt.w480h534,
        cursorSt
      )}>{props.children}</button>}

      {props.w534h534 && <button className={cx(
        textBtnSt.w534h534,
        cursorSt
      )}>{props.children}</button>}
    </>
  )
}

export default TextBtn;