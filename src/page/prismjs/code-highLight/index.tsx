import OmsSyntaxHighlight from './react-syntax-highlighter';

const CODE = `const woah = fun => fun + 1;
  const dude = woah(2) + 3;
  function thisIsAFunction() {
    return [1,2,3].map(n => n + 1).filter(n !== 3);
  }
  console.log('making up fake code is really hard');

  function itIs() {
    return 'no seriously really it is';
  }`;

function CodeHighLight() {
  return (
    <div className="wrapper">
      <OmsSyntaxHighlight textContent={CODE} language="jsx" />
    </div>
  );
}

export default CodeHighLight;
