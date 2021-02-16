import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Background, Container, Content } from './style';

import logo from '../assets/logo.svg';

const SignIn: React.FC = () => {
  return (
    <>
      <Container>
        <Content>
          <img src={logo} alt="Go Barber" />
          <form>
            <h1>Login</h1>
            <input type="text" placeholder="E-mail" />
            <input type="password" placeholder="Password" />

            <button type="submit">Enter</button>

            <a href="/">I forgot my password</a>
          </form>

          <a href="/">
            <FiLogIn size={20} />
            Create an account
          </a>
        </Content>

        <Background />
      </Container>
    </>
  );
};

export default SignIn;
