import { createContext } from "react";
import { ImmerHook, useImmerReducer } from "use-immer";

interface IUser {
  name: string;
  id: number;
}

interface IDish {
  name: string;
  price: number;
  users: string[];
}

type IReducer = {
  users: IUser[];
  dishes: IDish[];
};

type IAction = {
  do: "add" | "update";
  on: "users" | "dishes";
  index: number;
};

export const LunchContext = createContext<{
  users: IUser[];
  dishes: IDish[];
}>({
  users: [],
  dishes: [],
});

const reducer = (state: IReducer, action: IAction) => {
  switch (action.do) {
    case "add": {
      switch (action.on) {
        case "users":
          break;
        case "dishes":
          break;
      }
      break;
    }
    case "update": {
      switch (action.on) {
        case "users":
          break;
        case "dishes":
          break;
      }
      break;
    }
  }
};

export default function LunchProvider() {
  const [] = useImmerReducer(reducer, []);
  return null;
}
