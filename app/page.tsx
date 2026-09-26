"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Home() {
  const pathname = usePathname();

  return (
    <main className="min-h-screen bg-white">

      {/* Navbar */}
      <nav className="bg-black px-6 py-4 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
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
              className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                pathname === "/workouts"
                  ? "text-[#ccff00]"
                  : "text-white hover:bg-[#1c1f00]"
              }`}
            >
              WORKOUTS
            </Link>

            <Link
              href="/my-plan"
              className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                pathname === "/my-plan"
                  ? "text-[#ccff00]"
                  : "text-white hover:bg-[#1c1f00]"
              }`}
            >
              MY PLAN
            </Link>

          </div>

          {/* Plan and Saved */}
          <div className="flex items-center gap-5">

            {/* Plan */}
            <Link
              href="/my-plan"
              className="flex items-center gap-2 text-sm font-medium"
            >
              <span>Plan</span>

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#ccff00] text-xs font-bold text-black">
                0
              </span>
            </Link>

            {/* Saved */}
            <Link
              href="/my-plan"
              className="flex items-center gap-2 text-sm font-medium"
            >
              <span>Saved</span>

              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-zinc-500 text-xs">
                0
              </span>
            </Link>

          </div>

        </div>
      </nav>

      {/* Temporary content */}
      <section className="flex min-h-[70vh] items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-900">
          FITLOG
        </h1>
      </section>

    </main>
  );
}