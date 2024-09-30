import { selectAuthError } from "../../redux/auth/selectors";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import * as Yup from 'yup';
import style from './LoginForm.module.scss';
import { User } from "../../types/user";
import { login } from "../../redux/auth/operations";
import { useNavigate } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";

type Props = {
  onClose: () => void;
}

const LoginForm: React.FC<Props> = ({ onClose }) => {
  const emailField = 'email-field';
  const passwordField = 'password-field';
  const dispatch = useAppDispatch();
  const error = useAppSelector(selectAuthError);
  const navigate = useNavigate();

  const LoginSchema = Yup.object().shape({
    email: Yup.string().required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const handleSubmit = (values: User, actions: any) => {
    dispatch(login({
      email: values.email,
      password: values.password,
    }));
    actions.resetForm();
    onClose();
    navigate('/');
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={LoginSchema}
    >
      <Form className={style.form}>
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
            Log In
          </button>

          {error && <p className={style.error}>Something went wrong</p>}
      </Form>
    </Formik>
  );
}

export default LoginForm;