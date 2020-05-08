import React, { useCallback, useRef } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import { Link, useHistory } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import getValidationErrors from '../../utils/getValidationErrors';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';

import { Container, Content, AnimationContainer, Background } from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
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

        history.push('/dashboard');

        await signIn({
          email: data.email,
          password: data.password,
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const getErrors = getValidationErrors(err);

          formRef.current?.setErrors(getErrors);
          return;
        }

        // disparar um toast
        addToast({
          title: 'Falha no login',
          description: 'Email ou senha incorretos',
          type: 'error',
        });
      }
    },
    [signIn, addToast]
  );

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="" />
          <Form onSubmit={handleSubmit} ref={formRef}>
            <h1>Faça seu Logon</h1>

            <Input
              name="email"
              icon={FiMail}
              type="email"
              placeholder="E-mail"
            />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Password"
            />

            <Button type="submit">Entrar</Button>

            <a href="forgot">Esqueci-me da password</a>
          </Form>

          <Link to="signup">
            <FiLogIn />
            Criar Conta
          </Link>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
