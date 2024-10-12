import { createWithEqualityFn } from 'zustand/traditional';
import { persist, createJSONStorage } from 'zustand/middleware'

interface IUserStore {
  isLogged: boolean;
  name: String | null;
  lastName: String | null;
  email: String | null;

  logIn: (user?: IUser) => void;
  logOut: () => void;
}
interface IUser extends Omit<IUserStore, "logOut" | "logIn"> { }

const initialValues: IUser = {
  isLogged: false,
  name: null,
  lastName: null,
  email: null
}

const UseUserStore = createWithEqualityFn<IUserStore>()(
  persist(
    (set) => ({
      ...initialValues,

      logIn: (user?: IUser) => set({ ...user, isLogged: true }),
      logOut: () => set({ ...initialValues, isLogged: false }),
    }),
    {
      name: "user",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
)

export default UseUserStore