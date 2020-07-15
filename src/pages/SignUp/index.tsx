import React from 'react';
import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => {
  return (
    <Container>
      <Background />
      <Content>
        <img src={logoImg} alt="logo" />
        <form>
          <h1>Faça seu cadastro</h1>
          <Input name="name" type="text" icon={FiUser} placeholder="Nome" />
          <Input name="email" type="text" icon={FiMail} placeholder="E-mail" />
          <Input
            name="password"
            type="text"
            icon={FiLock}
            placeholder="Senha"
          />
          <Button name="submit" type="submit">
            Cadastrar
          </Button>
        </form>
        <a href="signin">
          <FiArrowLeft />
          Fazer login
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;
