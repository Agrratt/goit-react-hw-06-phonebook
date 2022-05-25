import { ItemContacts } from 'components/ItemContacts/ItemContacts';
import { ContactsList } from 'components/ListContacts/ListContacts.styled';
import { useSelector, useDispatch } from 'react-redux';
import { removeContact, getContacts, getFilter } from '../../redux/contactsSlice';

export function ListContacts() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onDeleteContact = (id) => dispatch(removeContact(id));
  
  const onSearchByName = () => {
    const normalizedFilter = filter.toLowerCase().trim();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter));
  };


  const arrayContacts = onSearchByName();

  return (
    <>
      <ContactsList>
        {arrayContacts.map(({ id, name, number }) => {
          return (
          
            <ItemContacts
              key={id}
              id={id}
              name={name}
              number={number}
              deleteContact={onDeleteContact}
            />
          );
        }

        )}
      </ContactsList>

    </>
  );
};