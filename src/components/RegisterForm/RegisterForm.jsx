import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

import {
  FormContainer,
  TitleInput,
  Input,
  NameInput,
  Button,
} from '../AuthForm.styled';
export const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit} autoComplete="off">
        <TitleInput>
          <NameInput>Username</NameInput>
          <Input type="text" name="name" />
        </TitleInput>
        <TitleInput>
          <NameInput>Email</NameInput>
          <Input type="email" name="email" />
        </TitleInput>
        <TitleInput>
          <NameInput>Password</NameInput>
          <Input type="password" name="password" />
        </TitleInput>
        <Button type="submit">Register</Button>
      </form>
    </FormContainer>
  );
};
