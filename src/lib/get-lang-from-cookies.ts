import { cookies } from "next/headers";

export const DEFAULT_LOCALE = "ko";

// Make it async
export async function getLocaleFromCookies(): Promise<string> {
  const cookieStore = await cookies(); // ← await here
  const lang = cookieStore.get("NEXT_LOCALE")?.value;
  return lang && ["ko", "en"].includes(lang) ? lang : DEFAULT_LOCALE;
}
