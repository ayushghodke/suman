/**
 * Helpers for the hybrid content strategy.
 *
 * `todo(description)` wraps a placeholder string the client must replace.
 * Render it inside any element with the `data-todo` attribute so the
 * dev-mode amber dashed outline (defined in globals.css) flags it.
 *
 * Grep `[TODO:` across `src/` to produce the final TODO inventory.
 */

export type CopyValue = string;

export function todo(description: string): CopyValue {
  return `[TODO: ${description}]`;
}

export function isTodo(value: string | undefined | null): boolean {
  return typeof value === "string" && value.startsWith("[TODO:");
}
