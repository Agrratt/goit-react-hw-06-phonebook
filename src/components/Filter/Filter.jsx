import { InputFilter } from 'components/Filter/Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter, filterContacts } from 'redux/contactsSlice';


export const Filter = () => {
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();

    const onChangeFilter = (evt) => dispatch(filterContacts(evt.target.value));
  
    
    return (
        <label>
            Find contacts by name <br />
            <InputFilter
                type="text"
                value={filter}
                onChange={onChangeFilter} />
        </label>
    )
};