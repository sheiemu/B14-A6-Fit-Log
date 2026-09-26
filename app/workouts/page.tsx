export default async function Workouts() {
  const response = await fetch(
    "https://api.abcz.workers.dev/api/fitlog"
  );

  const workouts = await response.json();

  return (
    <main>
      <h1>WORKOUTS</h1>

      <p>Total workouts: {workouts.length}</p>
    </main>
  );
}