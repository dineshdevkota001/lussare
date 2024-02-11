"use client";

import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { useRef, useState } from "react";
import { useResturantContext } from "./context";
import CalculateButton from "./calculateButton";

function AddUser() {
  const [open, setOpen] = useState(false);
  const { setUsers } = useResturantContext();

  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const addUser = (formData: FormData) => {
    const name = formData.get("username") as string;
    setUsers((users) => {
      const index = users.length;
      users.push({ name, id: index });
      return users;
    });
    formRef.current?.reset();
    inputRef.current?.focus();
  };

  return (
    <>
      <PlusCircleIcon
        className="w-6 h-6 inline"
        onClick={() => {
          setOpen(true);
          inputRef.current?.focus();
        }}
      />
      <dialog open={open} className="border px-4 py-2 rounded-2xl ">
        <form ref={formRef} action={addUser} className="flex flex-col gap-2">
          <input ref={inputRef} name="username" required />
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

function UserList() {
  const { users } = useResturantContext();

  return (
    <ul className="h-[calc(100%-120px)] bg-stone-50 rounded-xl overflow-y-auto">
      {users.map((user) =>
        user ? <li key={user.name}>{user.name}</li> : null
      )}
    </ul>
  );
}

export default function Users() {
  return (
    <div className="card max-h-full min-h-full">
      <div className="flex justify-between items-center">
        <h6 className="text-center inline">Users</h6>
        <AddUser />
      </div>
      <UserList />
      <CalculateButton />
    </div>
  );
}
