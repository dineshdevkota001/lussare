import CreateResturant from "./resturant";

export default function Home() {
  return (
    <main className="flex-1 flex">
      <div className="flex-1 flex flex-col justify-center items-center">
        <h1>Lussare</h1>
        <CreateResturant />
      </div>
    </main>
  );
}
