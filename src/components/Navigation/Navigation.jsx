import { Link } from 'components/AuthNav/AuthNav.styled';

export const Navigation = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/contacts">Contacts</Link>
    </nav>
  );
};
