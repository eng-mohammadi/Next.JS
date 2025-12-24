import Link from "next/link";
import Image from "next/image";

import { IMeal } from "@/src/data-types/interfaces/meal";

export default function MealItem({
  title,
  slug,
  image,
  summary,
  creator,
}: IMeal) {
  return (
    <article className="meal">
      <header>
        <div className="meal-image">
          <Image src={image} alt={title} fill />
        </div>
        <div className="meal-headerText">
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>
      <div className="meal-content">
        <p className="meal-summary">{summary}</p>
        <div className="meal-actions">
          <Link href={`/meals/${slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
}
