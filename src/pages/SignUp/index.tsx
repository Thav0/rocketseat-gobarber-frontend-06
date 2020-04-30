import React, { useCallback, useRef } from 'react';
import { FiMail, FiLock, FiUser, FiChevronLeft } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import * as Yup from 'yup';
import logoImg from '../../assets/logo.svg';

import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        nome: Yup.string().required('Nome obrigatório'),
        email: Yup.string()
          .email('Digite um email valido')
          .required('E-mail obrigatório'),
        password: Yup.string().min(6, 'Minimo 6 caracteres'),
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
      <Background />
      <Content>
        <img src={logoImg} alt="" />
        <Form initialData={{ nome: '' }} onSubmit={handleSubmit} ref={formRef}>
          <h1>Faça seu Logon</h1>

          <Input name="nome" icon={FiUser} type="text" placeholder="Nome" />
          <Input name="email" icon={FiMail} type="email" placeholder="E-mail" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Password"
          />

          <Button type="submit">Cadastrar</Button>
        </Form>

        <a href="/">
          <FiChevronLeft />
          Voltar para o Logon
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;
