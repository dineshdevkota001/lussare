"use client";
import { useSearchParams } from "next/navigation";

export default function ResturantName() {
  const params = useSearchParams();

  const resturant = params.get("resturant");

  return <h5>Resturant: {resturant}</h5>;
}
