import './App.css';
import ContentBox from './components/ContentBox/ContentBox';
import CompanyInfoSqareBox from './components/CompanyInfoSqareBox/CompanyInfoSqareBox';
import CompanyInfoBlock from './components/CompanyInfoBlock/CompanyInfoBlock';
import HamburgerMenu from './components/HamburgerMenu/HamburgerMenu';
import img from '../src/assets/loginBg.jpg';

function App() {
  const contents = [
    {
      title: 'Content 1 i test na 2 linijki bo dlugie sa',
      desc: 'Lorem ipsum, akjsdnkjna kajsnd  kjans kjn kjan  kajdnskj n kajdn kjn kjn',
    },
    { title: 'Content 2', desc: 'Lorem ipsum, akjsdnkjna kajsnd  kjans kjn kjan  kajdnskj n kajdn kjn kjn' },
    { title: 'Content 3', desc: 'Lorem ipsum, akjsdnkjna kajsnd  kjans kjn kjan  kajdnskj n kajdn kjn kjn' },
    { title: 'Content 4', desc: 'Lorem ipsum, akjsdnkjna kajsnd  kjans kjn kjan  kajdnskj n kajdn kjn kjn' },
    { title: 'Content 5', desc: 'Lorem ipsum, akjsdnkjna kajsnd  kjans kjn kjan  kajdnskj n kajdn kjn kjn' },
    { title: 'Content 6', desc: 'Lorem ipsum, akjsdnkjna kajsnd  kjans kjn kjan  kajdnskj n kajdn kjn kjn' },
  ];
  const boxes = contents.map((c) => <ContentBox key={c.title} title={c.title} desc={c.desc} img={img} />);
  return (
    <div className="App">
      <h1>Pomysly</h1>
      <div className="wrrr">
        <HamburgerMenu />
        <CompanyInfoBlock />
        <CompanyInfoSqareBox />
        <div className="mainInfo__smallContentList">
          <div className="contentWrapper">{boxes}</div>
        </div>
      </div>
    </div>
  );
}

export default App;

//certyfikowanie, kasaUE, konsulting, manufactoring, projektowanie, badania
