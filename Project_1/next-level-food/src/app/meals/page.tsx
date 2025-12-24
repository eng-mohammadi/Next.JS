import React, { Suspense } from "react";
import Link from "next/link";

import Meals from "@/src/components/meals/Meals";

export default async function page() {
  return (
    <React.Fragment>
      <header className="meal-page_grid--header">
        <h1>
          Delicious meals, created{" "}
          <span className="meal-page_highlight">by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className="meal-page_cta">
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className="main">
        <Suspense
          fallback={<p className="meal-loading_page">fetching meals...</p>}
        >
          <Meals />
        </Suspense>
      </main>
    </React.Fragment>
  );
}
