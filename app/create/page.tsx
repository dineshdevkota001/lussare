export default function Create() {
  return (
    <form
      className="flex-1 flex flex-col justify-center items-start"
      action="/data"
    >
      <label htmlFor="resName">Name of the Resturant</label>
      <input type="text" name="resName" />
      <button
        type="submit"
        className="mt-4 border rouded-16 px-4 py-2 hover:opacity-[0.8] active:opacity-[0.9]"
      >
        Next
      </button>
    </form>
  );
}
