import MacroLabel from "./MacroLabel";
function DietChartArea({ meals }) {
  const foodItems = meals.flatMap((meal) => meal.items);

  const totals = foodItems.reduce(
    (acc, item) => {
      acc.protein += item.protein;
      acc.carbs += item.carbs;
      acc.kcal += item.kcal;
      acc.fat += item.fat;
      return acc;
    },
    { protein: 0, carbs: 0, kcal: 0, fat: 0 }
  );

  const nutrients = [
    { label: "Proteína", value: totals.protein },
    { label: "Carboidratos", value: totals.carbs },
    { label: "Calorias", value: totals.kcal },
    { label: "Gordura", value: totals.fat },
  ];

  return (
    <div className="w-full p-4 gap-4 rounded-lg bg-gray-800 hover:bg-gray-700 flex flex-col">
      <div className="flex gap-3">
        {nutrients.map(({ label, value }) => (
          <MacroLabel key={label} label={label} value={value} />
        ))}
      </div>

      <div className="flex bg-green-400 p-1 items-center justify-center rounded-lg ">
        <span className="font-bold text-sm">GRAFICO</span>
      </div>
    </div>
  );
}

export default DietChartArea;
