import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {
  vscDarkPlus,
  coy,
  darcula,
  a11yDark,
} from 'react-syntax-highlighter/dist/esm/styles/prism'; // 代码高亮主题风格

// vscDarkPlus vscode 暗色主题
// darcula  webstorm 暗色主题
// coy vscode light主题

type tProps = {
  textContent: string;
  language: string;
  darkMode?: boolean;
};

const them = {
  dark: vscDarkPlus,
  light: coy,
};

const ADDED = [1, 2];
const REMOVED = [6];

const OmsSyntaxHighlight = (props: tProps) => {
  const { textContent, darkMode, language = 'txt' } = props;
  if (typeof darkMode === 'boolean') {
    them.light = coy;
  }
  return (
    <SyntaxHighlighter
      showLineNumbers={true} // 是否展示左侧行数
      lineNumberStyle={{ color: '#ddd', fontSize: 10 }} // 左侧行数的样式
      style={darkMode ? them.light : them.dark} // 主题风格
      language={language} // 需要语言类型 如css, jsx , javascript 等
      PreTag="div"
      wrapLines={true}
      lineProps={lineNumber => {
        const style: React.CSSProperties = { display: 'block' };
        if (ADDED.includes(lineNumber)) {
          style.backgroundColor = '#dbffdb';
        } else if (REMOVED.includes(lineNumber)) {
          style.backgroundColor = '#ffecec';
        }
        return { style };
      }}
    >
      {String(textContent).replace(/\n$/, '')}
    </SyntaxHighlighter>
  );
};

export default OmsSyntaxHighlight;
