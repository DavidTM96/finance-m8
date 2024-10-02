import { format } from "@formkit/tempo";

export function formatDate(date: Date) {
  return format(date, { date: "medium", time: "short" }, "en-US");
}
