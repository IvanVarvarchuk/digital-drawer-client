import { renderHook, act } from "@testing-library/react";
import { useLocalStorage } from "./use-local-storage";

describe("useLocalStorage", () => {
  beforeEach(() => {
    // Reset local storage before each test
    window.localStorage.clear();
  });

  it("should initialize with null value", () => {
    const { result } = renderHook(() => useLocalStorage());

    expect(result.current.value).toBeNull();
  });

  it("should set and get item from local storage", () => {
    const { result } = renderHook(() => useLocalStorage());
    const key = "testKey";
    const value = "testValue";

    act(() => {
      result.current.setItem(key, value);
    });

    expect(result.current.getItem(key)).toEqual(value);
  });

  it("should remove item from local storage", () => {
    const { result } = renderHook(() => useLocalStorage());
    const key = "testKey";
    const value = "testValue";

    act(() => {
      result.current.setItem(key, value);
    });

    act(() => {
      result.current.removeItem(key);
    });

    expect(result.current.getItem(key)).toBeNull();
  });
});

