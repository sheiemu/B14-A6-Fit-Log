"use client";

import { toast } from "react-toastify";

type WorkoutActionsProps = {
  workout: any;
};

export default function WorkoutActions({
  workout,
}: WorkoutActionsProps) {
  const addToPlan = () => {
    const existingPlan = JSON.parse(
      localStorage.getItem("fitlog-plan") || "[]"
    );

    const alreadyAdded = existingPlan.some(
      (item: any) => item.id === workout.id
    );

    if (!alreadyAdded) {
      localStorage.setItem(
        "fitlog-plan",
        JSON.stringify([...existingPlan, workout])
      );
    }

    toast.success("Added to today's plan");
  };

  const saveForLater = () => {
    const existingSaved = JSON.parse(
      localStorage.getItem("fitlog-saved") || "[]"
    );

    const alreadySaved = existingSaved.some(
      (item: any) => item.id === workout.id
    );

    if (!alreadySaved) {
      localStorage.setItem(
        "fitlog-saved",
        JSON.stringify([...existingSaved, workout])
      );
    }

    toast.success("Saved for later");
  };

  return (
    <div className="mt-8 flex flex-wrap gap-4">
      <button
        onClick={addToPlan}
        className="flex items-center gap-2 rounded-full bg-[#ccff00] px-6 py-3 text-sm font-bold text-black transition hover:bg-[#b8e600]"
      >
        <span>＋</span>
        Add to today's plan
      </button>

      <button
        onClick={saveForLater}
        className="flex items-center gap-2 rounded-full border border-zinc-700 bg-black px-6 py-3 text-sm font-bold text-white transition hover:border-[#ccff00] hover:text-[#ccff00]"
      >
        <span>♡</span>
        Save for later
      </button>
    </div>
  );
}