import { shallow } from "zustand/shallow";
import userStore from "../store/user-store"

const useUser = () => {
  const currentLanguage = userStore(state => (state), shallow);
  return currentLanguage;
};

export default useUser;