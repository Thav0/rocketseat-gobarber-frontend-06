import React from 'react';
import { FiMail, FiLock, FiUser, FiChevronLeft } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => (
  <Container>
    <Background />
    <Content>
      <img src={logoImg} alt="" />
      <form>
        <h1>Faça seu Logon</h1>

        <Input name="nome" icon={FiUser} type="text" placeholder="Nome" />
        <Input name="email" icon={FiMail} type="email" placeholder="E-mail" />
        <Input
          name="password"
          icon={FiLock}
          type="password"
          placeholder="Password"
        />

        <Button>Cadastrar</Button>
      </form>

      <a href="/">
        <FiChevronLeft />
        Voltar para o Logon
      </a>
    </Content>
  </Container>
);

export default SignUp;
