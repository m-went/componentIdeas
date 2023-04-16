import './CompanyInfoSqareBox.css';
import img from '../../assets/loginBg.jpg';

function CompanyInfoSqareBox(props) {
  return (
    <div className="companyInfoSqareBox">
      <div className="companyInfoSqareBox__infoWrapper companyInfoSqareBox__infoWrapper--leftImg">
        <div className="companyInfoSqareBox__imgContainer">
          <img className="companyInfoSqareBox__img" src={img} alt="Info Img" />
        </div>
        <div className="companyInfoSqareBox__contentWrapper">
          <div className="companyInfoSqareBox__textContainer">
            <h2 className="companyInfoSqareBox__infoTitle">Title pierwszej czesci</h2>
            <p className="companyInfoSqareBox__infoDesc">Tutuaj opis, czym sie zajmuje firma, historia itd</p>
            <button className="companyInfoSqareBox__button">Dowiedz sie więcej</button>
          </div>
        </div>
      </div>
      <div className="companyInfoSqareBox__infoWrapper companyInfoSqareBox__infoWrapper--rightImg">
        <div className="companyInfoSqareBox__imgContainer">
          <img className="companyInfoSqareBox__img" src={img} alt="infoImg" />
        </div>
        <div className="companyInfoSqareBox__contentWrapper">
          <div className="companyInfoSqareBox__textContainer companyInfoSqareBox__textContainer--rightImg">
            <h2 className="companyInfoSqareBox__infoTitle">Title drugiej czesci</h2>
            <p className="companyInfoSqareBox__infoDesc">Tutuaj opis, czym sie zajmuje firma, historia itd</p>
            <button className="companyInfoSqareBox__button">Dowiedz sie więcej</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyInfoSqareBox;
