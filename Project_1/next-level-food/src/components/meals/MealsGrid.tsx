import MealItem from "./MealItem";

export default function MealsGrid({ meals }) {
  return (
    <ul className="meals-grid">
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}
