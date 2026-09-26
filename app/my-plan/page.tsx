"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

type Workout = {
  id: number | string;
  name: string;
  equipment: string;
  image: string;
  duration: number;
  caloriesBurned: number;
  rating: number;
};

type SortOption = "duration" | "calories" | "rating";

export default function MyPlan() {
  const [plan, setPlan] = useState<Workout[]>([]);
  const [saved, setSaved] = useState<Workout[]>([]);
  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState<SortOption>("duration");

  const loadData = () => {
    const storedPlan = JSON.parse(
      localStorage.getItem("fitlog-plan") || "[]"
    );

    const storedSaved = JSON.parse(
      localStorage.getItem("fitlog-saved") || "[]"
    );

    setPlan(storedPlan);
    setSaved(storedSaved);
  };

  useEffect(() => {
    loadData();
    setLoading(false);

    const handleUpdate = () => {
      loadData();
    };

    window.addEventListener("fitlog-update", handleUpdate);

    return () => {
      window.removeEventListener("fitlog-update", handleUpdate);
    };
  }, []);

  const removeFromPlan = (id: number | string) => {
    const updatedPlan = plan.filter(
      (workout) => String(workout.id) !== String(id)
    );

    setPlan(updatedPlan);

    localStorage.setItem(
      "fitlog-plan",
      JSON.stringify(updatedPlan)
    );

    window.dispatchEvent(new Event("fitlog-update"));

    toast.success("Removed from today's plan");
  };

  const removeFromSaved = (id: number | string) => {
    const updatedSaved = saved.filter(
      (workout) => String(workout.id) !== String(id)
    );

    setSaved(updatedSaved);

    localStorage.setItem(
      "fitlog-saved",
      JSON.stringify(updatedSaved)
    );

    window.dispatchEvent(new Event("fitlog-update"));

    toast.success("Removed from saved");
  };

  const markAsDone = (id: number | string) => {
    const updatedPlan = plan.filter(
      (workout) => String(workout.id) !== String(id)
    );

    setPlan(updatedPlan);

    localStorage.setItem(
      "fitlog-plan",
      JSON.stringify(updatedPlan)
    );

    window.dispatchEvent(new Event("fitlog-update"));

    toast.success("Workout marked as done");
  };

  const currentList =
    activeTab === "plan" ? plan : saved;

  const sortedList = [...currentList].sort(
    (a, b) => {
      if (sortBy === "duration") {
        return (
          Number(a.duration || 0) -
          Number(b.duration || 0)
        );
      }

      if (sortBy === "calories") {
        return (
          Number(a.caloriesBurned || 0) -
          Number(b.caloriesBurned || 0)
        );
      }

      return (
        Number(a.rating || 0) -
        Number(b.rating || 0)
      );
    }
  );

  const statsList =
    activeTab === "plan" ? plan : saved;

  const exercises = statsList.length;

  const minutes = statsList.reduce(
    (total, workout) =>
      total + Number(workout.duration || 0),
    0
  );

  const calories = statsList.reduce(
    (total, workout) =>
      total + Number(workout.caloriesBurned || 0),
    0
  );

  return (
    <main className="min-h-screen bg-black text-white">
     <Navbar />

      {/* Main Content */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        {/* Heading */}
        <h1 className="text-4xl font-black uppercase">
          MY PLAN
        </h1>

        <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-400">
          Cap of five lifts for today. Finish them, then load more.
        </p>

        {/* Metrics */}
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <div className="rounded-xl bg-[#15171c] p-6">
            <p className="text-xs uppercase tracking-wider text-zinc-500">
              Exercises
            </p>

            <p className="mt-3 text-3xl font-black">
              {exercises}
            </p>
          </div>

          <div className="rounded-xl bg-[#15171c] p-6">
            <p className="text-xs uppercase tracking-wider text-zinc-500">
              Minutes
            </p>

            <p className="mt-3 text-3xl font-black">
              {minutes}
            </p>
          </div>

          <div className="rounded-xl bg-[#15171c] p-6">
            <p className="text-xs uppercase tracking-wider text-zinc-500">
              Calories
            </p>

            <p className="mt-3 text-3xl font-black">
              {calories}
            </p>
          </div>
        </div>

        {/* Tabs + Sort */}
        <div className="mt-12 flex flex-col gap-4 border-b border-zinc-800 md:flex-row md:items-end md:justify-between">
          {/* Tabs */}
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab("plan")}
              className={`px-5 py-3 text-sm font-bold ${
                activeTab === "plan"
                  ? "border-b-2 border-[#ccff00] text-[#ccff00]"
                  : "text-zinc-500"
              }`}
            >
              TODAY&apos;S PLAN
            </button>

            <button
              onClick={() => setActiveTab("saved")}
              className={`px-5 py-3 text-sm font-bold ${
                activeTab === "saved"
                  ? "border-b-2 border-[#ccff00] text-[#ccff00]"
                  : "text-zinc-500"
              }`}
            >
              SAVED
            </button>
          </div>

          {/* Sort */}
          <div className="mb-2 flex items-center gap-2">
            <label
              htmlFor="sort"
              className="text-xs font-medium uppercase tracking-wider text-zinc-500"
            >
              Sort By
            </label>

            <select
              id="sort"
              value={sortBy}
              onChange={(e) =>
                setSortBy(
                  e.target.value as SortOption
                )
              }
              className="rounded-full border border-zinc-700 bg-[#15171c] px-4 py-2 text-xs font-medium text-white outline-none focus:border-[#ccff00]"
            >
              <option value="duration">
                Duration
              </option>

              <option value="calories">
                Calories
              </option>

              <option value="rating">
                Rating
              </option>
            </select>
          </div>
        </div>

        {/* Loading */}
        {loading ? (
          <div className="py-24 text-center">
            <p className="text-sm text-zinc-400">
              Loading workouts…
            </p>
          </div>
        ) : sortedList.length === 0 ? (
          /* Empty State */
          <div className="py-24 text-center">
            <h2 className="text-2xl font-black">
              NOTHING HERE YET
            </h2>

            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-zinc-500">
              Browse the library and add a lift to get today moving.
            </p>

            <Link
              href="/workouts"
              className="mt-6 inline-block rounded-full bg-[#ccff00] px-6 py-3 text-sm font-bold text-black"
            >
              GO TO WORKOUTS
            </Link>
          </div>
        ) : (
          /* Workout List */
          <div className="mt-8 space-y-5">
            {sortedList.map((workout) => (
              <div
                key={workout.id}
                className="flex flex-col gap-5 rounded-xl bg-[#15171c] p-5 md:flex-row md:items-center"
              >
                {/* Thumbnail */}
                <div className="relative h-32 w-full shrink-0 overflow-hidden rounded-lg md:w-48">
                  <Image
                    src={workout.image}
                    alt={workout.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Workout Information */}
                <div className="flex-1">
                  <h3 className="text-xl font-black uppercase">
                    {workout.name}
                  </h3>

                  <p className="mt-2 text-sm text-zinc-400">
                    {workout.equipment}
                  </p>

                  {/* Stats */}
                  <div className="mt-4 flex flex-wrap gap-5 text-xs text-zinc-400">
                    <span>
                      ⏱ {workout.duration} min
                    </span>

                    <span>
                      🔥 {workout.caloriesBurned} kcal
                    </span>

                    <span>
                      ★ {workout.rating}
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    href={`/workouts/${workout.id}`}
                    className="rounded-full border border-zinc-700 px-4 py-2 text-xs font-bold hover:border-[#ccff00] hover:text-[#ccff00]"
                  >
                    VIEW DETAILS
                  </Link>

                  {activeTab === "plan" && (
                    <button
                      onClick={() =>
                        markAsDone(workout.id)
                      }
                      className="rounded-full bg-[#ccff00] px-4 py-2 text-xs font-bold text-black"
                    >
                      MARK AS DONE
                    </button>
                  )}

                  <button
                    onClick={() =>
                      activeTab === "plan"
                        ? removeFromPlan(workout.id)
                        : removeFromSaved(workout.id)
                    }
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-700 text-sm hover:border-red-500 hover:text-red-500"
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
      <Footer />
    </main>
  );
}