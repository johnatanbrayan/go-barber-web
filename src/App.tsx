import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ToastContainer from './components/ToastContainer';
import Routes from './routes';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <ToastContainer />

      <GlobalStyle />
    </>
  );
};

export default App;
