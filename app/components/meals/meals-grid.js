export default function MealsGrid() {
  return (
    <ul>
      {MealsGrid.map((meal) => (
        <li key={meal.id}></li>
      ))}
    </ul>
  );
}
