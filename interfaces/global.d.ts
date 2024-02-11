interface IHaveChildren {
  children?: React.ReactNode;
}

type IUser = { name: string; id: number };
type IFood = {
  name: string;
  price: number;
  quantity: number;
  users: number[];
};
