import { createWithEqualityFn } from "zustand/traditional";
import { persist, createJSONStorage } from "zustand/middleware";

interface IUserStore {
  isLogged: boolean;
  name: string | null;
  lastName: string | null;
  email: string | null;
  expirationDate: number;

  logIn: (user?: IUser) => void;
  logOut: () => void;
}

interface IUser extends Omit<IUserStore, "logOut" | "logIn"> { }

const initialValues: IUser = {
  expirationDate: 0,
  isLogged: false,
  name: null,
  lastName: null,
  email: null,
};

const expirationTime = 7 * 24 * 60 * 60 * 1000; // 7 días en milisegundos

const UseUserStore = createWithEqualityFn<IUserStore>()(
  persist(
    (set) => ({
      ...initialValues,

      logIn: (user?: IUser) => {
        const now = new Date().getTime();
        set({
          ...user,
          isLogged: true,
          expirationDate: now + expirationTime, // Establecer fecha de expiración al iniciar sesión
        });
      },

      logOut: () => set({ ...initialValues, isLogged: false }),
    }),
    {
      name: "user",
      storage: createJSONStorage(() => localStorage),
      version: 1,
      migrate: (persistedState: any) => {
        const now = new Date().getTime();
        const expirationDate = persistedState?.expirationDate || 0;

        // Si la fecha de expiración ha pasado, devolver el estado inicial
        return now > expirationDate ? { ...initialValues } : persistedState;
      },
    },
  ),
);

export default UseUserStore;
