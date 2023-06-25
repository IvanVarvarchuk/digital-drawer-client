import React, { useState } from 'react';
import { Form, Modal } from 'react-bootstrap';
import styles from './login-modal.module.css';
import useAuth from '../../hooks/use-auth/use-auth';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ILoginCommand, IRegisterCommand } from '../../../api/axios-client';

export enum AuthMode {
  LogIn,
  SignUp,
}
/* eslint-disable-next-line */
export interface LoginModalProps {
  showModal: boolean;
  authMode: boolean;
  handleClose: () => void;
}

export function LoginModal({
  showModal,
  authMode,
  handleClose,
}: LoginModalProps) {
  const [_authMode, setAuthMode] = useState<AuthMode>(
    authMode ? AuthMode.LogIn : AuthMode.SignUp
  );

  const changeAuthMode = () => {
    setAuthMode(
      _authMode === AuthMode.LogIn ? AuthMode.SignUp : AuthMode.LogIn
    );
  };

  return (
    <Modal
      show={showModal}
      centered
      className={styles.autFormContainer}
      onHide={handleClose}
    >
      <Modal.Header closeButton>
        <Modal.Title>
          {_authMode === AuthMode.LogIn ? 'LOG IN' : 'SIGN UP'}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <AuthModalFormContex.Provider value={{ changeAuthMode, handleClose }}>
          {_authMode === AuthMode.LogIn ? (
            <LoginModalForm />
          ) : (
            <SignUpModalForm />
          )}
        </AuthModalFormContex.Provider>
      </Modal.Body>
    </Modal>
  );
}
interface AuthModalFormContexType {
  changeAuthMode: () => void;
  handleClose: () => void;
}

const AuthModalFormContex = React.createContext<AuthModalFormContexType>(
  {} as AuthModalFormContexType
);
const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

export const LoginModalForm = () => {
  const { changeAuthMode, handleClose } = React.useContext(AuthModalFormContex);
  const { login } = useAuth();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ILoginCommand>();

  const submit: SubmitHandler<ILoginCommand> = async (data) => {
    if (data?.email && data?.password) {
      await login(data.email, data.password);
      handleClose();
    }
  };

  return (
    <Form className={styles.authForm} onSubmit={handleSubmit(submit)}>
      <div className={styles.authFormContent}>
        <div className="text-center">
          Not registered yet?{' '}
          <span className="link-primary" onClick={changeAuthMode}>
            Sign Up
          </span>
        </div>
        <div className="form-group mt-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control mt-1"
            placeholder="Enter email"
            {...register('email', { required: true, pattern: emailRegex })}
          />
          <p>{errors.email?.message}</p>
        </div>
        <div className="form-group mt-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control mt-1"
            aria-describedby="password"
            placeholder="Enter password"
            {...register('password', {
              required: true,
              minLength: 10,
              maxLength: 25,
            })}
          />
          <p>{errors.password?.message}</p>
          <Form.Text id="passwordHelpBlock" muted>
            Your password must be 8-20 characters long, contain letters and
            numbers, and must not contain spaces, special characters, or emoji.
          </Form.Text>
        </div>
        <div className="d-grid gap-2 mt-3">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </div>
    </Form>
  );
};
export const SignUpModalForm = () => {
  const { changeAuthMode, handleClose } = React.useContext(AuthModalFormContex);
  const { singUp } = useAuth();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IRegisterCommand>();

  const submit: SubmitHandler<IRegisterCommand> = async (data) => {
    if ((data?.userName, data?.email && data?.password)) {
      await singUp(data.userName, data.email, data.password);
      handleClose();
    }
  };
  return (
    <form className={styles.authForm} onSubmit={handleSubmit(submit)}>
      <div className={styles.authFormContent}>
        <div className="text-center">
          Already registered?{' '}
          <span className="link-primary" onClick={changeAuthMode}>
            Sign In
          </span>
        </div>
        <div className="form-group mt-3">
          <label>User Name</label>
          <input
            type="text"
            className="form-control mt-1"
            placeholder="Enter uout user name"
            {...register('userName', { required: true })}
          />
          <p>{errors.userName?.message}</p>
        </div>
        <div className="form-group mt-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control mt-1"
            placeholder="Email Address"
            {...register('email', { required: true, pattern: emailRegex })}
          />
          <p>{errors.email?.message}</p>
        </div>
        <div className="form-group mt-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control mt-1"
            placeholder="Password"
            {...register('password', {
              required: true,
              minLength: 10,
              maxLength: 25,
            })}
          />
          <p>{errors.password?.message}</p>
          <Form.Text id="passwordHelpBlock" muted>
            Your password must be 8-20 characters long, contain letters and
            numbers, and must not contain spaces, special characters, or emoji.
          </Form.Text>
        </div>
        <div className="form-group mt-3">
          <label>Confirm Password</label>
          <input
            type="password"
            className="form-control mt-1"
            placeholder="Password" />
          <p>{errors.password?.message}</p>
        </div>
        <div className="d-grid gap-2 mt-3">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="text-center mt-2">
          Forgot <a href="#">password?</a>
        </p>
      </div>
    </form>
  );
};
export default LoginModal;
