import React, { useCallback, useRef } from 'react';
import { FiChevronLeft, FiUser, FiKey, FiMail } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Container, Content, Background } from './style';
import logo from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';
import getValidationErrors from '../../utils/getValidationErrors';

const SignOut: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: unknown) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string()
          .required('Email is required')
          .email('Enter a valid email address'),
        password: Yup.string().min(6, 'At least 6 digits'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      const errors = getValidationErrors(err);
      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <Container>
      <Background />
      <Content>
        <img src={logo} alt="Go Barber" />

        <Form ref={formRef} onSubmit={handleSubmit}>
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
