"use client";

import { JSX, useTransition } from "react";

export default function MealsFormSubmit(): JSX.Element {
  const [isPending] = useTransition();

  return (
    <button type="submit" disabled={isPending}>
      {isPending ? "Submitting..." : "Share Meal"}
    </button>
  );
}
