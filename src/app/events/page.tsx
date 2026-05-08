import { PageContainer } from "@/components/page-container";

export const metadata = {
  title: "Events",
};

export default function EventsPage() {
  return (
    <PageContainer>
      <div className="mx-auto max-w-7xl px-6 w-full">
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Events</h1>
          <p className="mt-4 text-lg text-primary/70 max-w-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla.
          </p>
        </div>
      </div>
    </PageContainer>
  );
}
