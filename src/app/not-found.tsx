import { redirect } from "next/navigation";

export default function NotFound() {
  // Fallback to the homepage when a German route does not exist
  redirect("/");
}
