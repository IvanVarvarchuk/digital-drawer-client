import { render, screen, fireEvent } from '@testing-library/react';
import LoginModal, { AuthMode } from './login-modal';

describe('LoginModal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <LoginModal
        showModal={true}
        authMode={AuthMode.LogIn}
        handleClose={() => null }
        handleSubmit={() => null }
      />
    );
    expect(baseElement).toBeTruthy();
  });

  it('should display the correct AuthMode', () => {
    const { getByText } = render(
      <LoginModal
        showModal={true}
        authMode={AuthMode.SignUp}
        handleClose={() => null }
        handleSubmit={() => null }
      />
    );

    expect(screen.getByText("Sign Up")).toBeDefined();
  });

  it('should close the modal when handleClose function is called', () => {
    const handleClose = vi.fn();

    const { getByTestId } = render(
      <LoginModal
        showModal={true}
        authMode={AuthMode.LogIn}
        handleClose={handleClose}
        handleSubmit={() => null }
      />
    );

    fireEvent.click(getByTestId('close-button'));

    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('should call handleSubmit function when submit button is clicked', () => {
    const handleSubmit = vi.fn();

    const { getByTestId } = render(
      <LoginModal
        showModal={true}
        authMode={AuthMode.LogIn}
        handleClose={() => null }
        handleSubmit={handleSubmit}
      />
    );

    fireEvent.click(getByTestId('submit-button'));

    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
});
