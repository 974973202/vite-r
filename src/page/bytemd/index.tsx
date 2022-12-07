import 'bytemd/dist/index.min.css'; // 高亮css
import 'juejin-markdown-themes/dist/channing-cyan.min.css';
// import 'juejin-markdown-themes/dist/juejin.min.css';
// import 'juejin-markdown-themes/dist/arknights.css';
// import 'juejin-markdown-themes/dist/awesome-green.css';
// import 'juejin-markdown-themes/dist/Chinese-red.css';
// import 'juejin-markdown-themes/dist/fancy.css';
// import 'juejin-markdown-themes/dist/geek-black.css';
// import 'juejin-markdown-themes/dist/healer-readable.css';
import 'highlight.js/styles/vs.css';

import { Editor, Viewer } from '@bytemd/react';
import gfm from '@bytemd/plugin-gfm';
import highlight from '@bytemd/plugin-highlight-ssr';
import { useState } from 'react';

const plugins = [
  gfm(),
  highlight(),
  // Add more plugins here
];

function Bytemd() {
  const [value, setValue] = useState('');
  return (
    <div>
      <Editor
        value={value}
        plugins={plugins}
        onChange={v => {
          setValue(v);
        }}
      />
      <Viewer value={value} plugins={plugins} />
    </div>
  );
}

export default Bytemd;
