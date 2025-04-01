"use client";

import { ToastProvider } from "@/components/ui/hooks/useToast";

export default function ClientProvider({ children }) {
  return <ToastProvider>{children}</ToastProvider>;
}
