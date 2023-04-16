import './RomanLink.css';

function RomanLink({ text }) {
  return (
    <a className="romanLink" href="/">
      {text}
    </a>
  );
}

export default RomanLink;
