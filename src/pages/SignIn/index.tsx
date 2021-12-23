import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Container, Form, FormTitle, Logo } from './style';

import logoImg from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useAuth } from '../../hooks/useAuth';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const { signIn } = useAuth();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    signIn(email, password);
  };

  return (
    <Container>
      <Logo>
        <img src={logoImg} alt='' />
        <h2>Minha Carteira</h2>
      </Logo>
      <Form onSubmit={handleSubmit}>
        <FormTitle>Entrar</FormTitle>
        <Input
          placeholder='Email'
          type='email'
          required
          onChange={handleEmail}
        />
        <Input
          placeholder='Senha'
          type='password'
          required
          onChange={handlePassword}
        />

        <Button type='submit'>Acessar</Button>
      </Form>
    </Container>
  );
};

export default SignIn;
