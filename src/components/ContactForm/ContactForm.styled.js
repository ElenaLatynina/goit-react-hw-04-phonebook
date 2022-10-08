import styled from 'styled-components';
import { Form, Field } from 'formik';

export const Wrapper = styled(Form)`
display: flex;
flex-direction: column;
justify-content: space-between;
height: 200px;
margin: 0;
padding: 10px;
border: 2px solid #004D00;
border-radius: 10px;
`;

export const NameLable = styled.label`
display: flex;
flex-direction: column;
margin-bottom: 10px;
font-size: 16px;
`;


export const Input = styled(Field)`
margin-bottom: 10px;
padding: 4px;
font-size: 12px;
background: #FFF8DC;
border: none;
border-radius: 3px;
`;

export const SubmitForm = styled.button`
margin-top: 10px;
margin-left: auto;
padding: 4px;
width: 110px;
font-weight: 500;
border: 1px solid #1E90FF;
border-radius: 15px;
background-color: #1E90FF;
color: #FFF8DC;
`;

export const Error = styled.div`
margin-bottom: 10px;
font-size: 10px;
color: #8B0000;
`;