import { create } from 'zustand';

interface ModalState {
    modalOpen: boolean;
    toggleModal: () => void;
  }

const useModalState = create<ModalState>((set) => ({
    modalOpen: false,
    toggleModal: () => set((state) => ({ modalOpen: !state.modalOpen })),
  }));
  
  export default useModalState