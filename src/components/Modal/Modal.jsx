import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setShowModal } from 'redux/showModalSlice';
import { getShowModal } from 'redux/contacts/selectors';
import { BackDrop, ModalWindow } from './Modal.styled';

export default function Modal({ children }) {
  const dispatch = useDispatch();
  const showModalStatus = useSelector(getShowModal);
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        dispatch(setShowModal(!showModalStatus));
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [showModalStatus, dispatch]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      dispatch(setShowModal(!showModalStatus));
    }
  };

  return (
    <BackDrop onClick={handleBackdropClick}>
      <ModalWindow>{children}</ModalWindow>
    </BackDrop>
  );
}
