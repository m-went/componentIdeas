import './ContentBox.css';

import RomanLink from '../RomanLink/RomanLink';

function ContentBox({ title, desc, img }) {
  return (
    <div className="contentBox">
      <div className="contentBox__imgContainer">
        <img src={img} alt="Content" className="contentBox__img" />
      </div>
      <div className="contentBox__textContainer">
        <h2 className="contentBox__title">{title}</h2>
        <p className="contentBox__desc">{desc}</p>
      </div>
      <RomanLink text="Dowiedz się więcej" />
    </div>
  );
}

export default ContentBox;
