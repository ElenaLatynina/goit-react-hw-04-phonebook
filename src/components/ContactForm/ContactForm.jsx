// import PropTypes from 'prop-types';
// import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import {ErrorMessage, Formik} from 'formik';
import * as yup from 'yup';
import { Wrapper, NameLable, SubmitForm, Input, Error } from './ContactForm.styled';

const initialValues=  {
        name: '',
        number: ''
};
    
const schema = yup.object().shape({
    name: yup.string().required(),
    number: yup.string().required(),
});

const NameInputId = nanoid();
const NumberInputId = nanoid();

const ContactForm = ({ onSubmit }) => {
    const handleSubmit = (values, { resetForm }) => {
        onSubmit(values);
        resetForm();
    };
    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={handleSubmit}>
                <Wrapper>
                    <NameLable htmlFor={NameInputId}>Name</NameLable>
                    <Input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    id={NameInputId}
                    />
                    <ErrorMessage name="name" render={msg => <Error>{`Please, enter Name`}</Error>} />
                    <NameLable htmlFor={NumberInputId}>Number</NameLable>
                    <Input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    id={NumberInputId}
                />
                    <ErrorMessage name="number" render={msg => <Error>{`Please, enter Number`}</Error>}/>
                    <SubmitForm type="submit" name="Add contact">Add contact</SubmitForm>
            </Wrapper>
            </Formik>
        </div>
        );
}


     


// ContactForm.propTypes = {
//     handleSubmit: PropTypes.func,
//     NameInputId: PropTypes.func,
//     NumberInputId: PropTypes.func,
// }

export default ContactForm;


