import React, { useCallback, useRef } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import logoImg from '../../assets/logo.svg';
import getValidationErrors from '../../utils/getValidationErrors';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        email: Yup.string()
          .email('Digite um email valido')
          .required('E-mail obrigatório'),
        password: Yup.string().required('Password obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      const getErrors = getValidationErrors(err);

      formRef.current?.setErrors(getErrors);
    }
  }, []);

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="" />
        <Form onSubmit={handleSubmit} ref={formRef}>
          <h1>Faça seu Logon</h1>

          <Input name="email" icon={FiMail} type="email" placeholder="E-mail" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Password"
          />

          <Button type="submit">Entrar</Button>

          <a href="forgot">Esqueci-me da password</a>
        </Form>

        <a href="login">
          <FiLogIn />
          Criar Conta
        </a>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
