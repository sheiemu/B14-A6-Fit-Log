"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Home() {
  const pathname = usePathname();

  return (
    <main className="min-h-screen bg-black">

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

      {/* Hero */}
<section className="mx-auto mt-6 max-w-7xl px-6">
  <div className="relative overflow-hidden rounded-lg bg-[#15171c] px-8 py-10 md:px-12 md:py-12">

    <div className="max-w-xl">
      <p className="mb-3 text-[10px] font-bold tracking-widest text-[#ccff00]">
        WORKOUT LIBRARY
      </p>

      <h1 className="text-4xl font-black leading-none text-white md:text-5xl">
        TRAIN WITH INTENT. LOG EVERY SET.
      </h1>

      <p className="mt-5 max-w-md text-sm leading-6 text-zinc-400">
        FitLog is a dark, no-nonsense gym companion: pick a lift,
        lock it into today’s plan, and watch the week’s work add up.
      </p>

      <a
        href="#library"
        className="mt-6 inline-block rounded-sm bg-[#ccff00] px-5 py-3 text-[11px] font-bold text-black"
      >
        BROWSE WORKOUTS
      </a>
    </div>

    <div className="absolute right-4 top-1/2 hidden -translate-y-1/2 md:block">
      <Image
        src="/banner.png"
        alt="Workout"
        width={280}
        height={220}
        className="object-contain"
      />
    </div>

  </div>
</section>
</main>
  );
}