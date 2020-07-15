import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="logo" />
        <form>
          <h1>Faça seu logon</h1>
          <Input name="email" type="text" icon={FiMail} placeholder="E-mail" />
          <Input
            name="password"
            type="text"
            icon={FiLock}
            placeholder="Senha"
          />
          <Button name="submit" type="submit">
            Entrar
          </Button>
          <a href="forgot">Esqueci minha senha</a>
        </form>
        <a href="signup">
          <FiLogIn />
          Criar conta
        </a>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
