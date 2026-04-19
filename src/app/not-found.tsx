import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footbar } from "@/components/footbar";

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex flex-col bg-background">
      <div className="relative z-10 flex flex-col flex-1">
        <Navbar />
        <main className="flex flex-1 flex-col items-center justify-center px-4 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">404</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Page not found
          </h1>
          <Link
            href="/"
            className="mt-8 inline-flex items-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
          >
            Back to Home
          </Link>
        </main>
      </div>
      <Footbar />
    </div>
  );
}
