import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contactsSlice';
import { Form } from 'components/Form/Form';
import { ListContacts } from 'components/ListContacts/ListContacts';
import { Filter } from 'components/Filter/Filter';
import { Container } from 'components/App.styled';
import { Message } from 'components/Message/Message';

export function App() {
  const contacts = useSelector(getContacts);
  

  return (
    <Container>
      <h1>Phonebook</h1>
      <Form />

      <h2>Contacts</h2>
      <Filter />
      {contacts.length > 0 ? (<ListContacts />) : (<Message message='Сontact list is empty' />)}
        
        
    </Container>
    
  );
};