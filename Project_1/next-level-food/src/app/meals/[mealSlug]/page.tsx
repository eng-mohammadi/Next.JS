import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getMeal } from "@/lib/meals";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ mealSlug: string }>;
}) {
  const resolvedParams = await params;
  const meal = await getMeal(resolvedParams.mealSlug);

  return {
    title: meal.title,
    description: meal.summary,
  };
}

export default async function page({
  params,
}: {
  params: Promise<{ mealSlug: string }>;
}) {
  const resolvedParams = await params;
  const meal = await getMeal(resolvedParams.mealSlug);

  if (!meal) {
    notFound();
  }

  meal.instructions = meal.instructions.replace(/\n/g, "<br />");

  return (
    <React.Fragment>
      <header className="meal-slug__header">
        <div className="meal-slug__image">
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className="meal-slug__headerText">
          <h1>{meal.title}</h1>
          <p className="meal-slug__creator">
            by <Link href={`mailto:${meal.creator_email}`}>{meal.creator}</Link>
          </p>
          <p className="meal-slug__summary">{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          dangerouslySetInnerHTML={{ __html: meal.instructions }}
          className="meal-slug__instructions"
        ></p>
      </main>
    </React.Fragment>
  );
}
