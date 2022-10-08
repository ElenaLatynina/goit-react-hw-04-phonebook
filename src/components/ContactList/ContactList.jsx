import PropTypes from 'prop-types';
import { List, ContactItem, DataContact, Delete } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <List>
            {contacts.map(({id, name, number}) => (
                <ContactItem key={id}>
                    <DataContact>{name}:</DataContact>
                    <DataContact>{number}</DataContact>
                    <Delete onClick={() => onDeleteContact(id)}>Delete</Delete>
                </ContactItem>
            ))}
        </List>
    )
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.exact({
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
            id: PropTypes.string,
            onDeleteContact: PropTypes.func,
        }),
    )
}