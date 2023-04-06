import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

import {
  FormContainer,
  TitleInput,
  Input,
  NameInput,
  Button,
} from '../AuthForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    dispatch(
      logIn({
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
          <NameInput>Email</NameInput>
          <Input type="email" name="email" />
        </TitleInput>
        <TitleInput>
          <NameInput>Password</NameInput>
          <Input type="password" name="password" />
        </TitleInput>
        <Button type="submit">Log In</Button>
      </form>
    </FormContainer>
  );
};
