/*
 * @Author: liangzx liangzx@chinacscs.com
 * @Date: 2022-09-07 15:26:39
 * @LastEditors: liangzx liangzx@chinacscs.com
 * @LastEditTime: 2023-03-30 11:29:33
 * @FilePath: \vite-r\src\page\index\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Link } from 'react-router-dom';

function Index() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <Link to="/">index</Link>
      <Link to="/css">css</Link>
      <Link to="/wave">wave</Link>
      <Link to="/prismjs">prismjs</Link>
      <Link to="/bytemd">bytemd</Link>
      <Link to="/canvas/dynamic-logo">dynamic-logo</Link>
      <Link to="/text-styles">text-styles</Link>
      <Link to="/handsontable">handsontable</Link>
    </div>
  );
}

export default Index;
