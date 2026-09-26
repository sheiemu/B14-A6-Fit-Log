import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-zinc-800 bg-[#0b0b0b] px-6 py-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="FitLog logo"
            width={34}
            height={34}
          />

          <span className="text-lg font-bold tracking-wide">
            FITLOG
          </span>
        </div>

        {/* Copyright */}
        <p className="text-center text-xs text-zinc-500 md:text-right">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
}