"use client";

import LocalStorageService from "@/service/LocalStorage";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useMemo } from "react";

export default function Calculate() {
  const params = useParams();
  const sessionKey = params.sessionKey as string;
  const session = useMemo(() => {
    if (!sessionKey) return null;
    return LocalStorageService._instance.getSession<{
      users: IUser[];
      foods: IFood[];
    }>(sessionKey);
  }, [sessionKey]);

  const { userExpenses, totalCost } = useMemo(() => {
    if (!session)
      return {
        userExpenses: {},
        totalCost: 0,
      };
    const { foods, users } = session;
    let totalCost = 0;

    const userExpenses = foods?.reduce((acc, curr, i) => {
      const cost = curr.price * curr.quantity;
      totalCost += cost;
      const sharedWith = curr.users;

      const pricePerShare = cost / (sharedWith.length ?? 1);

      sharedWith.forEach((id) => {
        const name = users[id].name;
        const currentBalance = acc?.[name]?.balance ?? 0;
        const newBalance = currentBalance + pricePerShare;
        acc = { ...acc, [name]: { ...acc?.[name], balance: newBalance } };
      });
      return acc;
    }, Object.create(null));

    return { userExpenses, totalCost };
  }, [session]);

  return (
    <main className="p-4 mx-auto my-auto flex flex-col items-center">
      <h2 className="text-center">Calculations</h2>
      <table className="w-96 max-w-dvw">
        <tr>
          <th>User</th>
          <th>Price</th>
          <th>+/-</th>
        </tr>
        <tbody>
          {session?.users?.map(({ name }) => (
            <tr key={name}>
              <td>{name}</td>
              <td>{userExpenses?.[name]?.balance ?? 0}</td>
              <td>{userExpenses?.[name]?.loan ?? "-"}</td>
            </tr>
          ))}
          <tr>
            <td>Total</td>
            <td>{totalCost}</td>
          </tr>
        </tbody>
      </table>
      <Link href="/" className="self-center">
        <button>
          <ArrowLeftIcon className="w-4 h-4 inline" /> Back To start
        </button>
      </Link>
    </main>
  );
}
