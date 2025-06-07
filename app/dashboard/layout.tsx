import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import React from "react";

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const session = await auth.api.getSession({
    headers: headersList,
  });

  if (!session) {
    return null;
  }
  return <>{children}</>;
}
