import RightSidebar from "@/components/sidebar/right-sidebar";
import LeftSidebar from "@/components/sidebar/left-sidebar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background w-full">
      <main className="flex flex-1 max-md:flex-col w-full">
        <aside className="w-full md:w-72 lg:w-120 md:h-screen md:sticky md:top-0 shrink-0">
          <LeftSidebar />
        </aside>
        <section className="flex-1 w-full min-w-0">
          <RightSidebar />
        </section>
      </main>
      <Footer />
    </div>
  );
}