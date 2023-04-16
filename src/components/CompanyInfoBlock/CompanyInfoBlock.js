import './CompanyInfoBlock.css';
import img from '../../assets/loginBg.jpg';

function CompanyInfoBlock(props) {
  return (
    <div className="companyInfoBlock__wrapper">
      <div className="companyInfoBlock">
        <div className="companyInfoSqareBox__contentWrapper">
          <div className="companyInfoBlock__textWrapper">
            <div className="companyInfoBlock__textContainer">
              <h2 className="companyInfoBlock__infoTitle">Title pierwszej czesci</h2>
              <p className="companyInfoBlock__infoDesc">Tutuaj opis, czym sie zajmuje firma, historia itd</p>
              <button className="companyInfoBlock__button">Dowiedz sie więcej</button>
            </div>
          </div>
        </div>
        <div className="companyInfoBlock__imgContainer">
          <img className="companyInfoBlock__img" src={img} alt="Info img" />
        </div>
      </div>
    </div>
  );
}

export default CompanyInfoBlock;
