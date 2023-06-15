import { renderHook, act } from '@testing-library/react';
import { useUser } from './use-user';
import { AuthContextType } from '../../context/auth-context/auth-context';

// Mock AuthContext and useLocalStorage for testing purposes
const mockUser = { name: 'John Doe', email: 'john.doe@example.com' };
const setMockUser = vi.fn();
const mockAuthContextValue: AuthContextType = { user: null , setUser: setMockUser };

vi.mock('react', () => ({
  ...vi.importActual('react'),
  useContext: () => mockAuthContextValue,
}));

const mockSetItem = vi.fn();
vi.mock('../use-local-storage/use-local-storage', () => ({
  useLocalStorage: vi.fn(() => ({ setItem: mockSetItem })),
}));

describe('useUser hook', () => {
  it('adds a user to the AuthContext and localStorage', () => {
    const { result } = renderHook(() => useUser());

    act(() => {
      result.current.addUser(mockUser);
    });

    expect(setMockUser).toHaveBeenCalledWith(mockUser);
    expect(mockSetItem).toHaveBeenCalledWith('user', JSON.stringify(mockUser));
  });

  it('removes a user from the AuthContext and localStorage', () => {
    const { result } = renderHook(() => useUser());

    act(() => {
      result.current.removeUser();
    });

    expect(setMockUser).toHaveBeenCalledWith(null);
    expect(mockSetItem).toHaveBeenCalledWith('user', '');
  });

  it('returns the current user object from the AuthContext', () => {
    mockAuthContextValue.user = mockUser;
    const { result } = renderHook(() => useUser());

    expect(result.current.user).toEqual(mockUser);
  });
});

