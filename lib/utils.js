import clsx from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to conditionally join classNames
 * with Tailwind CSS-aware merging.
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
