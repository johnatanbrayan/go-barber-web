import React from 'react';
import { FiLock, FiLogIn, FiMail } from 'react-icons/fi';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Background, Container, Content } from './style';

import logo from '../../assets/logo.svg';

const SignIn: React.FC = () => {
  return (
    <>
      <Container>
        <Content>
          <img src={logo} alt="Go Barber" />
          <form>
            <h1>Login</h1>
            <Input
              name="email"
              icon={FiMail}
              type="text"
              placeholder="E-mail"
            />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Password"
            />

            <Button type="submit">Enter</Button>

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
