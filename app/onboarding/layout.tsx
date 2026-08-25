import { PlanProvider } from "./store";
export default function OnboardingLayout({ children }: { children: React.ReactNode }) {
  return <PlanProvider>{children}</PlanProvider>;
}
