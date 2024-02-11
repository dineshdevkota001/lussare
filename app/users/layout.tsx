import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import ResturantName from "./resturant";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

export default function UserLayout({ children }: IHaveChildren) {
  return (
    <div className="grid p-4 bg-stone-50 w-dvh overflow-hidden h-dvh grid-rows-[80px_1fr] grid-cols-[20rem_1fr]">
      <nav className="col-span-2 flex gap-2 items-center justify-between">
        <Link href={"/"} passHref>
          <ArrowLeftIcon className="h-4 w-4 inline mr-2" />
          <h5 className="inline">Lussare</h5>
        </Link>

        <ResturantName />

        <Link href="/info">
          <InformationCircleIcon className="h-6 w-6" />
        </Link>
      </nav>

      {children}
    </div>
  );
}
