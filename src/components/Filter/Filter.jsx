import PropTypes from 'prop-types';
import { NameInput, NameLable, ContactBook } from './Filter.styled';

export const Filter=({ value, onSearch }) => {
  const handleSearch = event => {
    onSearch(event.currentTarget.value);
  };
  return (
    <ContactBook>
      <NameLable>
        Find contact by Name 
        <NameInput
          type="text"
          name="search"
          value={value}
          onChange={handleSearch}
        ></NameInput>
      </NameLable>
    </ContactBook>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
};
