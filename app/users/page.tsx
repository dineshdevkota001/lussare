"use client";

import Link from "next/link";
import Context from "./context";
import Food from "./food";
import Users from "./users";
import CalculateButton from "./calculateButton";

export default function Page() {
  return (
    <Context>
      <Users />
      <Food />
    </Context>
  );
}
