import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import RenderRoutes from './router';

const Root = () => (
  <BrowserRouter>
    <RenderRoutes />
  </BrowserRouter>
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <Root />
  // </React.StrictMode>
);
