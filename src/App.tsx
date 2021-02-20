import React from 'react';
import SignIn from './pages/SignIn';
// import SignOut from './pages/SignOut';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      {/* <SignOut /> */}
      <SignIn />
      <GlobalStyle />
    </>
  );
};

export default App;
