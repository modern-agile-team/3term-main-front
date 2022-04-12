import { css, cx } from '@emotion/css';
// 나중에 팔레트에서 쉐도우 가져와야 함

function Profile(props) {
  const profileImg = props.isLogin
    ? 'https://i.ibb.co/VYZD02H/profile.png'
    : '/user2.png';

  const commonStyle = css`
    background: no-repeat center/cover;
    background-image: url(${profileImg});
    border-radius: 50%;
  `;

  const size = {
    '43': css`
      ${commonStyle}
      width:43px;
      height: 43px;
    `,
    '45': css`
      ${commonStyle}
      width:45px;
      height: 45px;
    `,
    '60': css`
      ${commonStyle}
      width:60px;
      height: 60px;
    `,
    '146': css`
      ${commonStyle}
      width:146px;
      height: 146px;
    `,
    '150': css`
      ${commonStyle}
      width:150px;
      height: 150px;
    `,
    '160': css`
      ${commonStyle}
      width:160px;
      height: 160px;
    `,
  };

  const shadow = {
    '0.2': css`
      box-shadow: 0px 0px 6px rgba(132, 131, 141, 0.2);
    `,
    '0.25': css`
      box-shadow: 0px 0px 4px rgba(132, 131, 141, 0.25);
    `,
    '0.5': css`
      box-shadow: 0px 0px 8px rgba(132, 131, 141, 0.5);
    `,
  };

  return (
    <>
      {props.size43 && <div className={cx(size[43], shadow[0.5])}></div>}
      {props.size45 && <div className={cx(size[45], shadow[0.25])}></div>}
      {props.size60 && <div className={cx(size[60], shadow[0.5])}></div>}
      {props.size146 && <div className={cx(size[146], shadow[0.2])}></div>}
      {props.size150 && <div className={cx(size[150], shadow[0.5])}></div>}
      {props.size160 && <div className={cx(size[160], shadow[0.5])}></div>}
    </>
  );
}

export default Profile;
