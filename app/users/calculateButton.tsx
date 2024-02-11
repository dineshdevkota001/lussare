"use client";

import LocalStorageService from "@/service/LocalStorage";
import { useResturantContext } from "./context";
import { useRouter } from "next/navigation";

export default function CalculateButton() {
  const { users, foods } = useResturantContext();

  const router = useRouter();

  const handleCalculate = () => {
    const sessionId = LocalStorageService._instance.saveSession({
      users,
      foods,
    });

    router.push(`calculate/${sessionId}`);
  };
  return (
    <button className="bg-white" onClick={handleCalculate}>
      Calculate
    </button>
  );
}
