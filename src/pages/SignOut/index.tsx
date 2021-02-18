import React from 'react';
import { FiChevronLeft, FiUser, FiKey, FiMail } from 'react-icons/fi';
import { Form } from '@unform/web';
import { Container, Content, Background } from './style';
import logo from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignOut: React.FC = () => {
  function handleSubmit(data: unknown): void {
    console.log(data);
  }

  return (
    <Container>
      <Background />
      <Content>
        <img src={logo} alt="Go Barber" />

        <Form onSubmit={handleSubmit}>
          <Input type="text" icon={FiUser} name="name" placeholder="Name" />
          <Input type="text" icon={FiMail} name="email" placeholder="E-mail" />
          <Input
            type="password"
            icon={FiKey}
            name="password"
            placeholder="Password"
          />

          <Button type="submit">Register</Button>
        </Form>

        <a href="/">
          <FiChevronLeft />
          Back to Login
        </a>
      </Content>
    </Container>
  );
};

export default SignOut;
