import ProgressBar from "@/components/planner/ProgressBar";

export default function PlannerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-primary-light">
      <ProgressBar />
      <main>{children}</main>
    </div>
  );
}
