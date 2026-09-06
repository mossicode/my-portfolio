import RightSidebar from "@/components/sidebar/right-sidebar";
import LeftSidebar from "@/components/sidebar/left-sidebar";
import Footer from "@/components/Footer";
import LightTunnel from "@/components/LightTunnel";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-background w-full">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <LightTunnel
          cableColor="#7c3aed"
          pulseColor="#a78bfa"
          tunnelColor="#1e1b4b"
          speed={0.08}
          flowDirection="inward"
          cableCount={18}
          thickness={0.3}
          glow={1.2}
          opacity={0.4}
          fadeNear={0.4}
          fadeFar={2.5}
          brightness={0.8}
          size={1.4}
          centerY={-0.15}
        />
      </div>
      <main className="relative z-10 flex flex-1 max-md:flex-col w-full">
        <aside className="w-full md:w-72 lg:w-120 md:h-screen md:sticky md:top-0 shrink-0 overflow-hidden">
          <LeftSidebar />
        </aside>
        <section className="flex-1 w-full min-w-0">
          <RightSidebar />
        </section>
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
