"use client";

import {
  ArrowRightCircleIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";
import { useImmer } from "use-immer";

interface IUser {
  name: string;
  id: number;
}

interface IDish {
  name: string;
  price: number;
  users: string[];
}

const isLastElementEmpty = <T extends { name: string }>(arr: T[]) => {
  const noOfItems = arr.length;
  if (!noOfItems) return false;

  const lastItem = arr?.[noOfItems - 1];
  if (!lastItem?.name) return true;
  return false;
};

export default function Data() {
  const [users, setUsers] = useImmer<IUser[]>([]);
  const [dishes, setDishes] = useImmer<IDish[]>([]);

  const noOfUsers = users?.filter((user) => user.name).length;
  const noOfDishes = dishes?.filter((dish) => dish.name).length;

  const handleAddEmptyDish = () => {
    setDishes((dish) => {
      // if (!isLastElementEmpty(dish))
      dish.push({
        name: "",
        price: 0,
        users: [],
      });
      return dish;
    });
  };
  const handleAddEmptyUser = () => {
    setUsers((user) => {
      // if (!isLastElementEmpty(user))
      user.push({
        id: user.length,
        name: "",
      });
      return user;
    });
  };

  return (
    <>
      <div className="h-dvh flex flex-col items-center justify-center">
        <h1>
          User ({noOfUsers}) {isLastElementEmpty(users) ? "yes" : "no"}
        </h1>
        <ul className="list-none">
          {users.map((user) => (
            <li key={user.id}>
              <input
                className="min-w-20"
                onChange={(e) => {
                  setUsers((oldUsers) => {
                    oldUsers[user.id] = {
                      id: user.id,
                      name: e.target.value,
                    };
                    return oldUsers;
                  });
                }}
                value={user.name ?? ""}
              />
            </li>
          ))}
        </ul>
        <button
          onClick={handleAddEmptyUser}
          className="border px-4 py-2 items-center justify-center"
        >
          <PlusCircleIcon className="h-6 w-6 inline" /> Add
        </button>
        <Link href="#dishes">
          <button className="absolute right-6 bottom-8 px-4 py-2 hover:border">
            <ArrowRightCircleIcon className="h-6 w-6 inline" /> Next
          </button>
        </Link>
      </div>
      <div className="h-dvh flex flex-col items-center justify-center">
        <h1>{noOfUsers || "No"} users</h1>
      </div>
      <div
        className="h-dvh flex flex-col items-center justify-center"
        id="dishes"
      >
        <h1>
          Dishes ({noOfDishes}) {isLastElementEmpty(dishes) ? "yes" : "no"}
        </h1>
        <ul>
          {dishes.map((dish, index) => (
            <li key={dish.price}>
              <input
                className="min-w-20"
                onChange={(e) => {
                  setDishes((dishes) => {
                    dishes[index] = {
                      ...dish,
                      name: e.target.value,
                    };
                    return dishes;
                  });
                }}
                value={dish.name ?? ""}
              />
              <select
                onChange={(e) => {
                  setDishes((dishes) => {
                    dishes[index] = {
                      ...dish,
                      users: Array.from(
                        e.target.selectedOptions,
                        (option) => option.value
                      ),
                    };
                    return dishes;
                  });
                }}
                multiple
              >
                {users.map(
                  (user) =>
                    user.name && (
                      <option
                        key={user.name}
                        value={user.id}
                        selected={dish.users.includes(user.id.toString())}
                      >
                        {user.name}
                      </option>
                    )
                )}
              </select>
            </li>
          ))}
        </ul>
        <button
          onClick={handleAddEmptyDish}
          className="border px-4 py-2 items-center justify-center gap-1 flex"
        >
          <PlusCircleIcon className="h-6 w-6 inline" />
          Add
        </button>
      </div>
    </>
  );
}
