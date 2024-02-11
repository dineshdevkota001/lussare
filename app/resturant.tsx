"use client";

import { CursorArrowRaysIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";

export default function CreateResturant() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <dialog
        className="border px-4 py-2"
        open={open}
        onClose={() => setOpen(false)}
      >
        <form className="flex-col flex gap-1" action="/users" method="get">
          <fieldset className="field">
            <label htmlFor="resturant">Name of the Resturant</label>
            <input
              autoFocus
              type="text"
              name="resturant"
              placeholder="Bhaje ko sekuwa..."
              required
              className="rounded-2xl"
            />
          </fieldset>
          <button type="submit">Next</button>
          <button
            className="bg-red-100"
            type="reset"
            onClick={() => setOpen(false)}
          >
            Close
          </button>
        </form>
      </dialog>
      <button onClick={() => setOpen(true)}>Create</button>
    </>
  );
}
