import { Footbar } from "@/components/footbar";
import { Navbar } from "@/components/navbar";

export default function HomePage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-blue-50">
      <div className="relative z-10 flex flex-col flex-1">
        <Navbar />
        <div className="flex justify-center items-center flex-1">Hello World!</div>
      </div>
      <Footbar />
    </div>
  );
}
