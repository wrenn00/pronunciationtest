"use client";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Plan = {
  purpose: string | null;
  focus: string[];
  frequency: string | null;
  style: string[];
};
const EMPTY: Plan = { purpose: null, focus: [], frequency: null, style: [] };
const KEY = "ttobak.onboarding";

const Ctx = createContext<{ plan: Plan; set: (p: Partial<Plan>) => void }>({
  plan: EMPTY, set: () => {},
});
export const usePlan = () => useContext(Ctx);

export function PlanProvider({ children }: { children: ReactNode }) {
  const [plan, setPlan] = useState<Plan>(EMPTY);
  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(KEY);
      if (raw) setPlan({ ...EMPTY, ...JSON.parse(raw) });
    } catch {}
  }, []);
  const set = (p: Partial<Plan>) => {
    setPlan((prev) => {
      const next = { ...prev, ...p };
      try { sessionStorage.setItem(KEY, JSON.stringify(next)); } catch {}
      return next;
    });
  };
  return <Ctx.Provider value={{ plan, set }}>{children}</Ctx.Provider>;
}
