export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black text-white">
      <div className="text-center">
        <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-zinc-700 border-t-[#ccff00]" />

        <p className="mt-5 text-sm font-medium text-zinc-400">
          Loading workouts...
        </p>
      </div>
    </main>
  );
}