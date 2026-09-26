"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();

  const [planCount, setPlanCount] = useState(0);
  const [savedCount, setSavedCount] = useState(0);

  const updateCounts = () => {
    const plan = JSON.parse(
      localStorage.getItem("fitlog-plan") || "[]"
    );

    const saved = JSON.parse(
      localStorage.getItem("fitlog-saved") || "[]"
    );

    setPlanCount(plan.length);
    setSavedCount(saved.length);
  };

  useEffect(() => {
    updateCounts();

    const handleStorageChange = () => {
      updateCounts();
    };

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("fitlog-update", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("fitlog-update", handleStorageChange);
    };
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-black px-4 py-3 sm:px-6 sm:py-4">
      <div className="mx-auto max-w-7xl">

        {/* Mobile */}
        <div className="md:hidden">

          {/* Top Row */}
          <div className="flex w-full items-center justify-between">

            {/* Logo */}
            <Link
              href="/workouts"
              className="flex shrink-0 items-center gap-2"
            >
              <Image
                src="/logo.png"
                alt="FitLog logo"
                width={34}
                height={34}
              />

              <span className="text-lg font-bold tracking-wide">
                FITLOG
              </span>
            </Link>

            {/* Plan & Saved */}
            <div className="flex shrink-0 items-center gap-3">

              <Link
                href="/my-plan"
                className="flex items-center gap-1.5 whitespace-nowrap text-xs font-medium"
              >
                <span>Plan</span>

                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ccff00] text-[10px] font-bold text-black">
                  {planCount}
                </span>
              </Link>

              <Link
                href="/my-plan"
                className="flex items-center gap-1.5 whitespace-nowrap text-xs font-medium"
              >
                <span>Saved</span>

                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-zinc-500 text-[10px]">
                  {savedCount}
                </span>
              </Link>

            </div>
          </div>

          {/* Navigation Row */}
          <div className="mt-3 flex w-full items-center justify-center gap-2">

            <Link
              href="/workouts"
              className={`rounded-full px-5 py-2 text-xs font-medium ${
                pathname === "/workouts"
                  ? "text-[#ccff00]"
                  : "text-white"
              } hover:bg-[#1c1f00]`}
            >
              WORKOUTS
            </Link>

            <Link
              href="/my-plan"
              className={`rounded-full px-5 py-2 text-xs font-medium ${
                pathname === "/my-plan"
                  ? "text-[#ccff00]"
                  : "text-white"
              } hover:bg-[#1c1f00]`}
            >
              MY PLAN
            </Link>

          </div>
        </div>

        {/* Tablet / Desktop */}
        <div className="hidden md:flex md:items-center md:justify-between">

          {/* Logo */}
          <Link
            href="/workouts"
            className="flex items-center gap-3"
          >
            <Image
              src="/logo.png"
              alt="FitLog logo"
              width={38}
              height={38}
            />

            <span className="text-xl font-bold tracking-wide">
              FITLOG
            </span>
          </Link>

          {/* Navigation */}
          <div className="flex items-center gap-2">

            <Link
              href="/workouts"
              className={`rounded-full px-5 py-2 text-sm font-medium ${
                pathname === "/workouts"
                  ? "text-[#ccff00]"
                  : "text-white"
              } hover:bg-[#1c1f00]`}
            >
              WORKOUTS
            </Link>

            <Link
              href="/my-plan"
              className={`rounded-full px-5 py-2 text-sm font-medium ${
                pathname === "/my-plan"
                  ? "text-[#ccff00]"
                  : "text-white"
              } hover:bg-[#1c1f00]`}
            >
              MY PLAN
            </Link>

          </div>

          {/* Plan & Saved */}
          <div className="flex items-center gap-5">

            <Link
              href="/my-plan"
              className="flex items-center gap-2 text-sm font-medium"
            >
              <span>Plan</span>

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#ccff00] text-xs font-bold text-black">
                {planCount}
              </span>
            </Link>

            <Link
              href="/my-plan"
              className="flex items-center gap-2 text-sm font-medium"
            >
              <span>Saved</span>

              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-zinc-500 text-xs">
                {savedCount}
              </span>
            </Link>

          </div>
        </div>

      </div>
    </nav>
  );
}