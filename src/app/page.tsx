import { Footbar } from "@/components/footbar";
import { Navbar } from "@/components/navbar";

export default function HomePage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-background">
      <main className="relative z-10 flex flex-col flex-1">
        <Navbar />
        <div className="flex flex-1 items-center justify-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Hello World!
          </h1>
        </div>
      </main>
      <Footbar />
    </div>
  );
}
