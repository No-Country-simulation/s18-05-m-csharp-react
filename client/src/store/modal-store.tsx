import { createWithEqualityFn } from "zustand/traditional";



const useModalStore = createWithEqualityFn<PostModal>()(
  (set) => ({
    isOpen: false,
    openModal: () => set({ isOpen: true }),
    closeModal: () => set({ isOpen: false })
  })
)

export default useModalStore;