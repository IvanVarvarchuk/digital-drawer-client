import { render, screen, fireEvent } from '@testing-library/react';
import LoginModal, { AuthMode } from './login-modal';

describe.skip('LoginModal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <LoginModal
        showModal={true}
        authMode={true}
        handleClose={() => null }
      />
    );
    expect(baseElement).toBeTruthy();
  });

  it('should display the correct AuthMode', () => {
    const { getByText } = render(
      <LoginModal
        showModal={true}
        authMode={false}
        handleClose={() => null }
      />
    );

    expect(screen.getByText("Sign Up")).toBeDefined();
  });

  it('should close the modal when handleClose function is called', () => {
    const handleClose = vi.fn();

    const { getByTestId } = render(
      <LoginModal
        showModal={true}
        authMode={true}
        handleClose={handleClose}
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
        authMode={true}
        handleClose={() => null }
      />
    );

    fireEvent.click(getByTestId('submit-button'));

    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
});
