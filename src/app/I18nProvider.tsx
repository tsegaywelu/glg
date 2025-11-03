// src/app/I18nProvider.tsx
"use client";

import { ReactNode } from "react";
import "../i18n"; // ← This initializes i18n

export default function I18nProvider({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
