import React, { ReactNode, useState } from 'react';
import { Modal } from 'react-bootstrap';
import styles from './login-modal.module.css';


export enum AuthMode { LogIn, SignUp };
/* eslint-disable-next-line */
export interface LoginModalProps {
  showModal: boolean;
  authMode: AuthMode;
  handleClose: () => void;
  handleSubmit: () => void;
}

export function LoginModal({
  showModal,
  authMode,
  handleClose,
  handleSubmit,
}: LoginModalProps) {
  const [_authMode, setAuthMode] = useState<AuthMode>(authMode);
  
  const changeAuthMode = () => {
    setAuthMode(_authMode === AuthMode.LogIn ? AuthMode.SignUp : AuthMode.LogIn);
  }
  const value: AuthModalFormContexType = {
    changeAuthMode,
    handleSubmit,
  }
  return (
    <Modal 
      show={showModal}
      centered
      className={styles.autFormContainer}
      onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {_authMode === AuthMode.LogIn? 'LOG IN': 'SIGN UP'}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AuthModalFormContex.Provider value={value}>
            {_authMode === AuthMode.LogIn? 
              <LoginModalForm /> : <SignUpModalForm/>}
          </AuthModalFormContex.Provider>
        </Modal.Body>
      </Modal>
  );
}
interface AuthModalFormContexType {
  handleSubmit: () => void,
  changeAuthMode: () => void,
}

const AuthModalFormContex = React.createContext<AuthModalFormContexType>({} as AuthModalFormContexType);

export const LoginModalForm = () => {
  const { changeAuthMode, handleSubmit } = React.useContext(AuthModalFormContex);

  return (
      <form className={styles.authForm} onSubmit={handleSubmit}>
        <div className={styles.authFormContent}>
          <h3 className={styles.authFormTitle}>Sign In</h3>
          <div className="text-center">
            Not registered yet?{" "}
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
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
  );

}
export const SignUpModalForm = () => {
  const { changeAuthMode, handleSubmit } = React.useContext(AuthModalFormContex);

  return (
      <form className={styles.authForm}>
        <div className={styles.authFormContent}>
          <h3 className={styles.authFormTitle}>Sign In</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Sign In
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
            />
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
  )
}
export default LoginModal;
