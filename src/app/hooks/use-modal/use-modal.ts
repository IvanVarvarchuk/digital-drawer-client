import { useState, useCallback } from 'react';
import { useBoolean } from 'usehooks-ts';

// eslint-disable-next-line @typescript-eslint/no-empty-interface

export interface UseModal {
  isModalVisible: boolean;
  hideModal: () => void;
  showModal: () => void;
}

export function useModal(): UseModal {
  const { value: isModalVisible, setFalse: hideModal, setTrue: showModal } = useBoolean();

  return ({
    isModalVisible,
    hideModal,
    showModal,
  });
}

export default useModal;
