import Link from 'next/link';
import { Logo } from '@/components/logo';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center">
      <main className="flex w-full max-w-xl flex-col items-stretch px-5 py-40">
        <nav className="flex items-center justify-between">
          <Logo />
          <Link
            href="#"
            className="rounded text-sm text-gray-1100 underline outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-100"
          >
            Login
          </Link>
        </nav>

        <section className="mt-16 flex flex-col items-stretch gap-1">
          <h1 className="text-sm/6 font-medium">Bookmarks</h1>
          <p className="text-sm/6 text-gray-1100">
            Effortlessly save, organize, and retrieve your essential links. Simple, functional, just
            enough—no fluff.
          </p>
        </section>

        <section className="mt-6 flex flex-col items-stretch gap-1">
          <h1 className="text-sm/6 font-medium">About</h1>
          <p className="text-sm/6 text-gray-1100">
            Inspired by Rauno Freiberg&apos;s (Basic) Bookmarks, this project is a skill test and
            portfolio piece. Built to showcase simplicity and functionality. Minimal features, clean
            design, focused on usability. No tracking, no ads—just an intuitive experience.
          </p>
        </section>

        <section className="mt-6 flex flex-col items-stretch gap-1">
          <h1 className="text-sm/6 font-medium">Join</h1>
          <p className="text-sm/6 text-gray-1100">
            Free to use, but keep in mind: no guaranteed updates or support. This project is a skill
            showcase and portfolio piece—built for simplicity, not scale. Dive in if you&apos;re
            after a clean, no-fuss bookmarking experience.
          </p>
        </section>

        <section></section>
      </main>
    </div>
  );
}
