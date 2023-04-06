import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { useAuth } from 'hooks';
import { Container, TitlePhonebook, HeaderAppBar } from '../Container.styled';
export const Appbar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <HeaderAppBar>
      <Container>
        <TitlePhonebook>Phonebook</TitlePhonebook>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Container>
    </HeaderAppBar>
  );
};
