import { selectAuthError } from "../../redux/auth/selectors";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import * as Yup from 'yup';
import style from './RegistrationForm.module.scss';
import { User } from "../../types/user";
import { register } from "../../redux/auth/operations";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";

type Props = {
  onClose: () => void;
}

const RegistrationForm: React.FC<Props> = ({ onClose }) => {
  const usernameField = 'username-field';
  const emailField = 'email-field';
  const passwordField = 'password-field';
  const birthdayField = 'birthday-field';
  const dispatch = useAppDispatch();
  const error = useAppSelector(selectAuthError);

  const RegistrationSchema = Yup.object().shape({
    username: Yup.string().required('required').min(3, 'Too short!').max(50, 'Too long!'),
    email: Yup.string().required('required').email('Invalid email address'),
    password: Yup.string().required('required').min(8, 'Password should contain at least 8 characters'),
    birth_date: Yup.date().required('required').max(
      new Date(new Date().setFullYear(new Date().getFullYear() - 18)), 'Must be at least 18 years old'),
  });

  const handleSubmit = (values: User, actions: any) => {
    dispatch(register({
      username: values.username,
      email: values.email,
      password: values.password,
      birth_date: values.birth_date,
    }));
    actions.resetForm();
    onClose();
  };

  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        password: "",
        birth_date: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={RegistrationSchema}
    >
      <Form className={style.form}>
        <label htmlFor={usernameField} className={style.label}>
          Username 
          <Field 
            name="username"
            id={usernameField}
            type="text" 
            className={style.input}
            placeholder="Please create username"
            />
          <ErrorMessage className={style.error} name="username" component="span" />
        </label>

        <label htmlFor={emailField} className={style.label}>
          Email
          <Field 
            className={style.input}
            name="email"
            id={emailField}
            type="email" 
            placeholder="Please enter your email"
          />
          <ErrorMessage className={style.error} name="email" component="span" />
        </label>

        <label htmlFor={birthdayField} className={style.label}>
          Birth Date
          <Field
            name="birth_date"
            id={birthdayField}
            type="date" 
            className={style.input}
            />
          <ErrorMessage className={style.error} name="birth_date" component="span" />
        </label>

        <label htmlFor={passwordField} className={style.label}>
          Password
          <Field 
            name="password"
            id={passwordField}
            type="password" 
            className={style.input}
            placeholder="Please enter the password"
            />
          <ErrorMessage className={style.error} name="password" component="span" />
        </label>

        <button 
          type="submit" 
          className={style.button} 
        >
          Register
        </button>

          {error && <p className={style.error}>{error}</p>}
      </Form>
    </Formik>
  );
}

export default RegistrationForm;