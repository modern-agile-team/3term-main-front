import { css, cx } from "@emotion/css";

interface mosaicPorps {
  children ? : string
  img      ? : boolean
  body     ? : boolean
}


function Mosaic (props : mosaicPorps) {

const body = css`
width: 100%;
height: 100%;
background: linear-gradient(180.11deg, rgba(250, 251, 252, 0) 4.81%, rgba(152, 152, 152, 0.016) 30.04%, rgba(78, 78, 78, 0.8) 99.9%);
backdrop-filter: blur(6px);
position: absolute;
top: 631px;
bottom: 150px;
`

const img = css`
width: 517px;
height: 517px;
border-radius: 6px;
background-color: rgba(79, 78, 92, 0.5);
backdrop-filter: blur(8px);
position: absolute;
top: 99px;
left: 267px;
display: flex;
justify-content: center;
align-items: center;
&:after{
  content: '로그인 후 이용해 주세요.';
  width: 184px;
  height: 81px;
  background: url('../../public/img1.jpeg') no-repeat contain/center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
`

  return (
    <>
    {props.body && <div className={cx(
      body,
    )}></div>}
    {props.img && <div className={cx(
      img,
    )}></div>}
    </>
  )
}

export default Mosaic