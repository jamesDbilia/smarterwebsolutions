import React from 'react';

const FormInput = (props) => {
  return (
    <div
      className={`${props.form}input--${props.name} ${props.form}input--${props.name}${props.modification} `}
      style={{
        marginBottom:
          props.helpertext === '' && props.name !== 'message'
            ? '3rem'
            : props.name === 'message'
            ? '2.5rem'
            : '.5rem',
      }}
    >
      {props.name === 'message' || props.name === 'coverLetter' ? (
        <textarea
          {...props}
          className={` ${props.form}input ${props.form}input--textarea`}
        />
      ) : (
        <input {...props} type={'text'} className={` ${props.form}input`} />
      )}
      {props.helpertext !== '' ? (
        <p
          className={`${props.form}form-error ${props.form}form-error--${props.name}`}
        >
          {props.helpertext}
        </p>
      ) : (
        <p className='form-no-error'></p>
      )}
    </div>
  );
};

export default FormInput;
