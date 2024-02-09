"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function CreateLayout({ children }: IHaveChildren) {
  const [q] = useSearchParams();

  return (
    <main className="flex-1 min-h-svh grid grid-cols-2">
      <div className="flex-1 flex flex-col justify-center items-center">
        <h1>{q[1]}</h1>
        <Link href="/">
          <button className="border rouded-16 px-4 py-2 hover:opacity-[0.8] active:opacity-[0.9]">
            Back
          </button>
        </Link>
      </div>
      {children}
    </main>
  );
}
