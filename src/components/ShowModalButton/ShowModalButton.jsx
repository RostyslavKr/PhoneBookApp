import { useSelector, useDispatch } from 'react-redux';
import { getShowModal } from 'redux/contacts/selectors';
import { setShowModal } from 'redux/showModalSlice';
import { Button } from 'components/Forms/Forms.styled';
export const ShowModalButton = () => {
  const dispatch = useDispatch();
  const showModalStatus = useSelector(getShowModal);
  console.log(showModalStatus);
  const handleShowModal = () => {
    dispatch(setShowModal(!showModalStatus.showModal));
  };
  return (
    <>
      <Button type="button" onClick={handleShowModal}>
        New Contact
      </Button>
    </>
  );
};
