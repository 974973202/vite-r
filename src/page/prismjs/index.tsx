import { MutableRefObject, useEffect, useRef, useState } from 'react';
import StylePrismjs from './prismjs';
import OmsSyntaxHighlight from './react-syntax-highlighter';
import { styleText, isPc } from './prismjs-text';

const interval = 50;

const CODE = `const woah = fun => fun + 1;
  const dude = woah(2) + 3;
  function thisIsAFunction() {
    return [1,2,3].map(n => n + 1).filter(n !== 3);
  }
  console.log('making up fake code is really hard');

  function itIs() {
    return 'no seriously really it is';
  }`;

function Prismjs() {
  const [currentStyleCode, setCurrentStyleCode] = useState<string>('');
  const saveStyleEditorRef: MutableRefObject<any> = useRef(null);

  const progressiveShowStyle = async (n = 0) => {
    let chars = '';
    const showStyle = (i: number) =>
      new Promise<void>(resolve => {
        const style = styleText[n];
        const char = style[i];
        if (!style || !char) {
          resolve();
          return;
        }
        chars += char;
        setCurrentStyleCode(chars);

        if (char === '\n' && saveStyleEditorRef.current) {
          saveStyleEditorRef.current?.toBottom();
        }
        setTimeout(() => {
          resolve(showStyle(i + 1));
        }, interval);
      });
    return showStyle(0);
  };

  useEffect(() => {
    (async () => {
      await progressiveShowStyle(0);
    })();
  }, []);

  return (
    <div>
      <OmsSyntaxHighlight textContent={CODE} language="jsx" />
      <div style={{ display: isPc ? 'flex' : '' }}>
        <StylePrismjs ref={saveStyleEditorRef} code={currentStyleCode} />
      </div>
    </div>
  );
}

export default Prismjs;
