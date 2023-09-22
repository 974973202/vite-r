import { MutableRefObject, useEffect, useRef, useState } from 'react';
import StylePrismjs from './prismjs';
import { styleText, isPc } from './prismjs-text';
import Heart from './heart';

const interval = 50;

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
    <div className="wrapper">
      <div style={{ display: isPc ? 'flex' : '' }}>
        <StylePrismjs ref={saveStyleEditorRef} code={currentStyleCode} />
        <Heart />
      </div>
    </div>
  );
}

export default Prismjs;
