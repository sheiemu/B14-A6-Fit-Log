"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Workouts() {
  const [workouts, setWorkouts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadWorkouts = async () => {
      const response = await fetch(
        "https://api.abcz.workers.dev/api/fitlog"
      );

      const data = await response.json();

      setWorkouts(data);
      setLoading(false);
    };

    loadWorkouts();
  }, []);

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {loading ? (
        <div className="flex min-h-[70vh] items-center justify-center">
          <div className="text-center">
            <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-zinc-700 border-t-[#ccff00]" />

            <p className="mt-5 text-sm text-zinc-400">
              Loading workouts...
            </p>
          </div>
        </div>
      ) : (
        <>
          {/* Hero */}
          <section className="mx-auto mt-6 max-w-7xl px-6">
            <div className="relative overflow-hidden rounded-lg bg-[#15171c] px-8 py-10 md:px-12 md:py-12">
              <div className="max-w-xl">
                <p className="mb-3 text-[10px] font-bold tracking-widest text-[#ccff00]">
                  WORKOUT LIBRARY
                </p>

                <h1 className="text-4xl font-black leading-none md:text-5xl">
                  TRAIN WITH INTENT. LOG EVERY SET.
                </h1>

                <p className="mt-5 max-w-md text-sm leading-6 text-zinc-400">
                  FitLog is a dark, no-nonsense gym companion: pick a lift,
                  lock it into today&apos;s plan, and watch the week&apos;s
                  work add up.
                </p>

                <a
                  href="#library"
                  className="mt-6 inline-block rounded-sm bg-[#ccff00] px-5 py-3 text-[11px] font-bold text-black"
                >
                  BROWSE WORKOUTS
                </a>
              </div>

              {/* Hero Image */}
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

          {/* Library */}
          <section
            id="library"
            className="mx-auto max-w-7xl px-6 py-16"
          >
            <h2 className="mt-2 text-3xl font-black">
              THE LIBRARY
            </h2>

            <p className="mt-2 text-sm text-white">
              Twelve lifts covering every major muscle groups.
            </p>

            {/* Workout Cards */}
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {workouts.map((workout: any) => (
                <Link
                  key={workout.id}
                  href={`/workouts/${workout.id}`}
                  className="block overflow-hidden rounded-lg border border-transparent bg-[#15171c] transition-colors duration-200 hover:border-[#ccff00]"
                >
                  {/* Workout Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={workout.image}
                      alt={workout.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Card Content */}
                  <div className="p-5">
                    {/* Muscle Group Tags */}
                    <div className="flex flex-wrap gap-2">
                      {workout.muscleGroups?.map(
                        (muscle: string) => (
                          <span
                            key={muscle}
                            className="rounded-full bg-[#262900] px-3 py-1 text-[10px] font-medium text-[#ccff00]"
                          >
                            {muscle}
                          </span>
                        )
                      )}
                    </div>

                    {/* Workout Name */}
                    <h3 className="mt-4 text-lg font-bold text-white">
                      {workout.name}
                    </h3>

                    {/* Equipment */}
                    <p className="mt-2 text-sm text-zinc-400">
                      {workout.equipment}
                    </p>

                    {/* Workout Stats */}
                    <div className="mt-4 flex items-center justify-between border-t border-zinc-800 pt-4 text-xs text-zinc-400">
                      <span>{workout.duration} min</span>
                      <span>{workout.caloriesBurned} kcal</span>
                      <span>★ {workout.rating}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </>
      )}

      <Footer />
    </main>
  );
}