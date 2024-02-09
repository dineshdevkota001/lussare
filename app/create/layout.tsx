import Link from "next/link";

export default function CreateLayout({ children }: IHaveChildren) {
  return (
    <main className="flex-1 flex">
      <div className="flex-1 flex flex-col justify-center items-center">
        <h1>Lussare</h1>
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
