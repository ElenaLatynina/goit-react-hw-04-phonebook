import PropTypes from 'prop-types';
import { List, ContactItem,Delete, DataContact } from './ContactList.styled';

export const ContactList = ({ contacts, deleteContact}) => {
    return (
        <List>
            {contacts.map(({ id, name, number }) => (
            <ContactItem key={id}>
                <DataContact>{name}:</DataContact>
                <DataContact>{number}</DataContact>
                <Delete onClick={() => deleteContact(id)}>Delete</Delete>
            </ContactItem>
            ))}
        </List>
    )
}

ContactList.prototype = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;