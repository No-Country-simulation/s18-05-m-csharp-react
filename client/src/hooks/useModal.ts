import useModalStore from "../store/modal-store"

const useModal = () => {
  return useModalStore(state => (state));
};

export default useModal;