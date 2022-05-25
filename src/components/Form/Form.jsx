import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { addContact, getContacts } from 'redux/contactsSlice';
import { ReactComponent as AddIcon } from 'components/icons/addContact.svg';
import { nanoid } from 'nanoid';
import {FormContainer, Wrapper, Label, InputName, ButtonAdd} from 'components/Form/Form.styled'

export function Form() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    
    contacts.some((contact) => contact.name === name) ?
      (alert(`${name} is already in contacts`)) :
      (dispatch(addContact(newContact)));
    
    reset();  
  };
  
  const handleNameChange = (evt) => {
    setName(evt.target.value)
  };
  
  const handleNumberChange = (evt) => {
    setNumber(evt.target.value)
  };


  return (
    <FormContainer onSubmit={handleSubmit}>
      <Wrapper>
        <Label>
          Name
          <InputName
            autoComplete="off"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleNameChange}
            
          />
        </Label>

      </Wrapper>

      <Wrapper>
        <Label >
          Number
          <input
            autoComplete="off"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleNumberChange}
          />
        </Label>

      </Wrapper>

      <ButtonAdd type="submit">
        Add contact <AddIcon width='12' height='15' />
      </ButtonAdd>

    </FormContainer>
  );
};