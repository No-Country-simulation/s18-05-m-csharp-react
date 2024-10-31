import { shallow } from "zustand/shallow";
import userStore from "../store/user-store"

const useUser = () => {
  return userStore(state => (state), shallow);
};

export default useUser;