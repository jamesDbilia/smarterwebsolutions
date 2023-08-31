import React, { useEffect } from 'react';
import { Form, Formik, useField } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { submitEmail } from '../actions/EmailActions.js';
import FormInput from '../common/FormInput.js';
import { toast, ToastContainer } from 'react-toastify';
import { useRouter } from 'next/router';

const MyTextField = ({ placeholder, ...props }) => {
  const [field, meta] = useField(props);
  // touched is clicked into field
  const errorText = meta.error && meta.touched ? meta.error : '';
  return (
    <FormInput
      {...field}
      helpertext={errorText}
      modification='--project'
      error={errorText ? 'true' : 'false'}
      form='project__'
    />
  );
};

function ContactUsProject({
  email: { contactRedirect, emailFailure },
  submitEmail,
}) {
  const router = useRouter();
  useEffect(() => {
    async function toastFunction() {
      await require('react-toastify/dist/ReactToastify.css');
    }
    toastFunction();
  });
  useEffect(() => {
    emailFailure &&
      toast.error('Contact Form Was Not Sent !', {
        position: toast.POSITION.TOP_LEFT,
      });
    contactRedirect && router.push('/contactSuccess');
  }, [emailFailure, contactRedirect]);

  const ContactSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string()
      .email('Please enter valid email address')
      .required('Email is required'),
  });

  return (
    <Formik
      initialValues={{ email: '', name: '', phone: '' }}
      onSubmit={(values) => {
        submitEmail(values);
      }}
      validationSchema={ContactSchema}
    >
      {() => (
        <Form>
          <div className='contact-info__form' id='contact-form'>
            <div className='project__form-area'>
              <label className='project__form-label'>Name &#42;</label>
              <MyTextField
                ariaLabel='name'
                name='name'
                type='text'
                required
                placeholder='Name'
              />
            </div>
            <div className='project__form-area'>
              <label className='project__form-label'>Email &#42;</label>
              <MyTextField
                id='email'
                name='email'
                type='email'
                placeholder='Email'
                ariaLabel='Email'
                required
              />
            </div>
            <div className='project__form-area'>
              <label className='project__form-label'>Phone</label>
              <MyTextField
                ariaLabel='Phone'
                name='phone'
                type='text'
                placeholder='Phone'
                required
              />
            </div>
            <button type='submit' text='Submit' className='project__button'>
              Submit
            </button>
            <ToastContainer />
          </div>
        </Form>
      )}
    </Formik>
  );
}

const mapStateToProps = (state) => ({
  email: state.email,
});
export default connect(mapStateToProps, { submitEmail })(ContactUsProject);
