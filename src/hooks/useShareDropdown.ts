import { useState } from "react";

export function useShareDropdown() {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((prev) => !prev);
  const close = () => setOpen(false);

  return { open, toggle, close };
}
