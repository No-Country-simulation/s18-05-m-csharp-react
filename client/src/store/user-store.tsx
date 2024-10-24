import { createWithEqualityFn } from "zustand/traditional";
import { persist, createJSONStorage } from "zustand/middleware";
import { deleteCookie } from "cookies-next";

interface IUser {
  isLogged: boolean;
  name: string | null;
  lastName: string | null;
  email: string | null;
  expirationDate: number;
}

interface IUserStore extends IUser {
  logIn: (user?: IUser) => void;
  logOut: () => void;
}


const initialValues: IUser = {
  expirationDate: 0,
  isLogged: false,
  name: null,
  lastName: null,
  email: null,
};

const expirationTime: number = Number(process.env.EXPIRATION_TIME) * 1000; // 7 días en milisegundos

const useUserStore = createWithEqualityFn<IUserStore>()(
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

      logOut: () => {
        deleteCookie("token")
        set({ ...initialValues })
      },
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

export default useUserStore;
