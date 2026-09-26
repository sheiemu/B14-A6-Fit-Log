import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
      <div className="text-center">
        <p className="text-sm font-bold tracking-widest text-[#ccff00]">
          FITLOG
        </p>

        <h1 className="mt-4 text-7xl font-black">
          404
        </h1>

        <h2 className="mt-4 text-2xl font-bold">
          PAGE NOT FOUND
        </h2>

        <p className="mt-3 text-sm text-zinc-400">
          The workout you&apos;re looking for doesn&apos;t exist.
        </p>

        <Link
          href="/workouts"
          className="mt-8 inline-block rounded-full bg-[#ccff00] px-6 py-3 text-sm font-bold text-black"
        >
          GO TO WORKOUTS
        </Link>
      </div>
    </main>
  );
}