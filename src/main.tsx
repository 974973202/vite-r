import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Index from './index';
import LeedCode from './leet-code';
import RenderRoutes from './router';
import './index.css';

const Root = () => (
  <BrowserRouter>
    {/* <Routes> */}
    {/* <Route path="/" element={<App />}>
        <Route index element={<Index />} />
        <Route path="leet-code" element={<LeedCode />} />
        <Route path="teams" element={<Teams />}>
          <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} />
        </Route>
        <Route path="*" element={<>not found</>} />
      </Route> */}
    <RenderRoutes />
    {/* </Routes> */}
  </BrowserRouter>
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
