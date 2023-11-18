import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { InputFields, AddBtn } from './FormInput.styled';
import { useDispatch } from "react-redux";
import { addContact } from 'redux/actions';


const SubmitSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[a-zA-Z\s]+$/, 'Only letters are allowed')
    .min(2, 'Too Short!')
    .required('Please fill that'),
  number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, 'Must be in format: 000-00-00')
    .required('This field is required, please fill that'),
});

export default function FormInput() {

  const dispatch = useDispatch();

  const onFormSubmit = data => {
        const newContact = data;
        dispatch(addContact(newContact));
     };
    
    return(
      <Formik
        initialValues={{
          id: '',
          name: '',
          number: '',
        }}
        validationSchema={SubmitSchema}

        onSubmit={(values, actions) => {
          onFormSubmit(values);
          actions.resetForm();
        }}
      >
        <Form>
          <InputFields>
            <label>Name:
            <Field 
              name="name"
              placeholder="Jane"/>
              <ErrorMessage name="name" />
            </label>
            <label>Number:
            <Field 
              name="number"
              placeholder="658-58-69"
              type="tel"/>
              <ErrorMessage name="number" />
            </label>
            <AddBtn type="submit">Add contact</AddBtn>
          </InputFields>
        </Form> 
    </Formik>
    )
}