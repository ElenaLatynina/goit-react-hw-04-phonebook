import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { NameInput, NameLable, ContactBook } from './Filter.styled';

export const Filter=({ query, onChange }) => {
    const QueryInputId = nanoid();

    return (
        <ContactBook>
            <NameLable htmlFor={QueryInputId}>Find contacts by name</NameLable>
            <NameInput
                type="text"
                name="query"
                value={query}
                id={QueryInputId}
                onChange={onChange}
        />
        </ContactBook>
    )
}

Filter.propTypes = {
    query: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    QueryInputId: PropTypes.func,
}
