import { createContext, useContext, useMemo } from "react";
import { Updater, useImmer } from "use-immer";

type IContext = {
  users: IUser[];
  setUsers: Updater<IUser[]>;
  foods: IFood[];
  setFoods: Updater<IFood[]>;
};

const Context = createContext<IContext>({
  users: [],
  setUsers: () => {},
  foods: [],
  setFoods: () => {},
});

export const useResturantContext = () => useContext(Context);

export default function ContextProvider({ children }: IHaveChildren) {
  const [users, setUsers] = useImmer<IUser[]>([]);
  const [foods, setFoods] = useImmer<IFood[]>([]);

  const value = useMemo(
    () => ({
      users,
      foods,
      setFoods,
      setUsers,
    }),
    [users, foods, setFoods, setUsers]
  );

  return <Context.Provider value={value}>{children}</Context.Provider>;
}
