import Image from "next/image";
import WorkoutActions from "./WorkoutActions";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function WorkoutDetails({ params }: Props) {
  const { id } = await params;

  const response = await fetch(
    `https://api.abcz.workers.dev/api/fitlog/${id}`
  );

  const workout = await response.json();

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid items-stretch gap-12 md:grid-cols-2">

          {/* Left Side - Image */}
          <div className="relative min-h-[500px] overflow-hidden rounded-lg md:h-full">
  <Image
    src={workout.image}
    alt={workout.name}
    fill
    className="object-cover"
  />
</div>

          {/* Right Side */}
          <div>

            {/* Category */}
            <div className="inline-flex rounded-full bg-[#262900] px-4 py-2 text-xs font-medium text-[#ccff00]">
              {workout.muscleGroups?.join(" · ")}
            </div>

            {/* Title */}
            <h1 className="mt-5 text-4xl font-black uppercase leading-tight md:text-5xl">
              {workout.name}
            </h1>

            {/* Description */}
            <p className="mt-5 text-sm leading-7 text-zinc-400">
              {workout.description}
            </p>

            {/* Key Specs */}
            <div className="mt-8 overflow-hidden rounded-xl bg-[#15171c]">

              <div className="flex items-center justify-between border-b border-zinc-800 px-5 py-4">
                <span className="text-xs uppercase text-zinc-500">
                  Equipment
                </span>
                <span className="text-sm font-semibold">
                  {workout.equipment}
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-zinc-800 px-5 py-4">
                <span className="text-xs uppercase text-zinc-500">
                  Difficulty
                </span>
                <span className="text-sm font-semibold">
                  {workout.difficulty}
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-zinc-800 px-5 py-4">
                <span className="text-xs uppercase text-zinc-500">
                  Sets
                </span>
                <span className="text-sm font-semibold">
                  {workout.sets}
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-zinc-800 px-5 py-4">
                <span className="text-xs uppercase text-zinc-500">
                  Reps
                </span>
                <span className="text-sm font-semibold">
                  {workout.reps}
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-zinc-800 px-5 py-4">
                <span className="text-xs uppercase text-zinc-500">
                  Duration
                </span>
                <span className="text-sm font-semibold">
                  {workout.duration} min
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-zinc-800 px-5 py-4">
                <span className="text-xs uppercase text-zinc-500">
                  Calories
                </span>
                <span className="text-sm font-semibold">
                  {workout.caloriesBurned} kcal
                </span>
              </div>

              <div className="flex items-center justify-between px-5 py-4">
                <span className="text-xs uppercase text-zinc-500">
                  Rating
                </span>
                <span className="text-sm font-semibold text-[#ccff00]">
                  ★ {workout.rating}
                </span>
              </div>

            </div>

            {/* Instructions */}
            <div className="mt-10">
              <h2 className="text-sm font-bold tracking-widest text-[#ccff00]">
                INSTRUCTIONS
              </h2>

              <div className="mt-5 space-y-4">
                {workout.instructions?.map(
                  (instruction: string, index: number) => (
                    <div key={index} className="flex gap-4">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#262900] text-xs font-bold text-[#ccff00]">
                        {index + 1}
                      </span>

                      <p className="text-sm leading-6 text-zinc-400">
                        {instruction}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Buttons */}
            <WorkoutActions workout={workout} />

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}