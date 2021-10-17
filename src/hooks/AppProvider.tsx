import { ReactNode } from "react";
import { StandingProvider } from "./StandingsContext";

interface AppProviderProps {
  children: ReactNode;
}
export default function AppProvider({ children }: AppProviderProps) {
  return <StandingProvider>{children}</StandingProvider>;
}
