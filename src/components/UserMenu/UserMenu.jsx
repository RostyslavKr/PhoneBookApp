import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import image from 'user-avatar.svg';
import { Button } from 'components/Forms/Forms.styled';
import {
  WrapperUserMenu,
  WrapperImageUser,
  UserImage,
} from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <WrapperUserMenu>
      <WrapperImageUser>
        <UserImage src={image} alt="user-image" />
      </WrapperImageUser>

      <p>{user.email}</p>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </WrapperUserMenu>
  );
};
