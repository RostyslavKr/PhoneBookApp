import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { getShowModal } from 'redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { Contacts } from 'components/Contacts/Contacts';
import { Forms } from 'components/Forms/Forms';
import { Filter } from 'components/Filter/Filter';
import Modal from 'components/Modal/Modal';
import { ShowModalButton } from 'components/ShowModalButton/ShowModalButton';

export default function Contact() {
  const dispatch = useDispatch();
  const showModalStatus = useSelector(getShowModal);
  console.log(showModalStatus);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch, showModalStatus]);
  return (
    <div>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      {showModalStatus ? (
        <Modal>
          <Forms />
        </Modal>
      ) : (
        <ShowModalButton />
      )}

      <Filter />
      <Contacts />
    </div>
  );
}
