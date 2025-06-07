"use client";

import { QueryClientProvider as TanStackQueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { queryClient } from "./QueryClient";

const QueryClientProvider = ({ children }: { children: ReactNode }) => {
  return (
    <TanStackQueryClientProvider client={queryClient}>
      {children}
    </TanStackQueryClientProvider>
  );
};

export default QueryClientProvider;
