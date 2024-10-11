import { createWithEqualityFn } from 'zustand/traditional';
import { persist, createJSONStorage } from 'zustand/middleware'

interface IUserStore {
  token: String | null;
  name: String | null;
  lastName: String | null;
  email: String | null;

  setToken: (token: string) => void;

  logIn: (user: IUser) => void;
  logOut: () => void;
}
interface IUser extends Omit<IUserStore, "logOut" | "logIn" | "setToken"> { }

const initialValues: IUser = {
  token: null,
  name: null,
  lastName: null,
  email: null
}

const UseUserStore = createWithEqualityFn<IUserStore>()(
  persist(
    (set) => ({
      ...initialValues,
      setToken: (token: string) => set((state) => ({ ...state, token })),

      logIn: (user: IUser) => set({ ...user }),
      logOut: () => set({ ...initialValues }),
    }),
    {
      name: "user",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
)

export default UseUserStore