"use client";

import { useRef, useState } from "react";
import { useResturantContext } from "./context";
import {
  CursorArrowRaysIcon,
  PlusCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useImmer } from "use-immer";

function AddFood() {
  const [open, setOpen] = useState(false);
  const { users, setFoods } = useResturantContext();
  const [selectedUsers, setSelectedUsers] = useImmer<number[]>([]);

  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const addFood = (formData: FormData) => {
    const name = formData.get("name") as string;
    const users = selectedUsers;
    const price = formData.get("price") as string;
    const quantity = formData.get("quantity") as string;

    if (!users.length) {
      alert("No users selected");
      return;
    }

    setFoods((foods) => {
      foods.push({
        name,
        users,
        price: Number(price),
        quantity: Number(quantity),
      });
      return foods;
    });

    formRef.current?.reset();
    inputRef.current?.focus();
  };

  return (
    <>
      <PlusCircleIcon
        className="w-6 h-6 inline"
        onClick={() => setOpen(true)}
      />
      <dialog open={open} className="border px-4 py-2 rounded-2xl ">
        <form ref={formRef} action={addFood} className="flex flex-col gap-2">
          <fieldset className="field">
            <label htmlFor="name">Name</label>
            <input
              ref={inputRef}
              name="name"
              required
              placeholder="Chicken Mo:Mo:"
            />
          </fieldset>
          <div className="grid grid-cols-3">
            <label className="col-span-3">Users</label>
            {users.length ? (
              users.map((user) => {
                const index = selectedUsers.findIndex((c) => c === user.id);
                const checked = index >= 0;
                return (
                  <fieldset key={user.id} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={checked}
                      name={user.name}
                      value={user.id}
                      onChange={(e) => {
                        setSelectedUsers((users) => {
                          if (checked) users.splice(index, 1);
                          else users.push(Number(e.target.value));
                          return users;
                        });
                      }}
                    />
                    <label htmlFor={user.name}>{user.name}</label>
                  </fieldset>
                );
              })
            ) : (
              <p className="text-center col-span-3 text-stone-300">No users</p>
            )}
          </div>
          <span className="flex items-center gap-1">
            <fieldset className="field">
              <label htmlFor="price">Price</label>
              <input
                name="price"
                type="number"
                required
                className="rounded-2xl"
              />
            </fieldset>
            <fieldset className="field">
              <label className="opacity-0">Q</label>
              <XMarkIcon className="w-6 h-6" />
            </fieldset>
            <fieldset className="field">
              <label htmlFor="quantity">Quantity</label>
              <input name="quantity" type="number" required defaultValue={1} />
            </fieldset>
          </span>
          <button>Add</button>
          <button
            className="bg-red-100"
            type="reset"
            onClick={() => setOpen(false)}
          >
            Close
          </button>
        </form>
      </dialog>
    </>
  );
}

function FoodList() {
  const { foods, users } = useResturantContext();

  return (
    <ul className="h-[calc(100%-44px)] bg-stone-50 rounded-xl overflow-y-auto">
      {foods.map((food) =>
        food ? (
          <li key={food.name}>
            {food.name} @ {food.price} for{" "}
            {food.users.map((userIndex) => users[userIndex].name).join(", ")} -
            {food.quantity} plates
          </li>
        ) : null
      )}
    </ul>
  );
}

export default function Foods() {
  return (
    <div className="px-4 py-2 max-h-full min-h-full">
      <div className="flex justify-between items-center">
        <div />
        <h4 className="text-center inline">Foods</h4>
        <AddFood />
      </div>
      <FoodList />
    </div>
  );
}
