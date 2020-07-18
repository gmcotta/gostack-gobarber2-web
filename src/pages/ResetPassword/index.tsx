import React, { useRef, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import getValidationErrors from '../../utils/getValidationErrors';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { useToast } from '../../context/ToastContext';

import { Container, Content, AnimatedContent, Background } from './styles';

interface ResetPasswordFormData {
  password: string;
  password_confirmation: string;
}

const ResetPassword: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: ResetPasswordFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          password: Yup.string().required('Senha obrigatória'),
          password_confirmation: Yup.string().equals(
            [Yup.ref('password')],
            'As senhas não são iguais.',
          ),
        });
        await schema.validate(data, {
          abortEarly: false,
        });

        history.push('/');
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);
          formRef.current?.setErrors(errors);
          return;
        }

        addToast({
          type: 'error',
          title: 'Erro na redefinição de senha',
          description:
            'Ocorreu um erro ao redefinir a senha, tente novamente mais tarde.',
        });
      }
    },
    [addToast, history],
  );

  return (
    <Container>
      <Content>
        <AnimatedContent>
          <img src={logoImg} alt="logo" />
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Redefinir sua senha</h1>
            <Input
              name="password"
              type="password"
              icon={FiLock}
              placeholder="Nova senha"
            />
            <Input
              name="password_confirmation"
              type="password"
              icon={FiLock}
              placeholder="Confirmação da senha"
            />
            <Button name="submit" type="submit">
              Redefinir
            </Button>
          </Form>
        </AnimatedContent>
      </Content>
      <Background />
    </Container>
  );
};

export default ResetPassword;
