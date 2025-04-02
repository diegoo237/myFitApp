import NutrientList from "./NutrientList";
import calculateTotals from "../../helpers/calculateTotals";
import { useMemo } from "react";

function DietChartArea({ meals }) {
  const totals = useMemo(() => calculateTotals(meals), [meals]);

  const macronutrients = [
    { label: "Proteína", value: totals.protein, color: "bg-red-800" },
    { label: "Carboidratos", value: totals.carbs, color: "bg-blue-800" },
    { label: "Calorias", value: totals.kcal, color: "bg-yellow-800" },
    { label: "Gordura", value: totals.fat, color: "bg-green-800" },
  ];

  const micronutrients = [
    { label: "Fibras", value: totals.fiber, color: "bg-purple-800" },
    { label: "Sódio", value: totals.sodium, color: "bg-pink-800" },
    { label: "Açúcares", value: totals.sugar, color: "bg-orange-800" },
    { label: "Ferro", value: totals.iron, color: "bg-gray-800" },
    { label: "Cálcio", value: totals.calcium, color: "bg-indigo-800" },
    { label: "Potássio", value: totals.potassium, color: "bg-teal-800" },
  ];

  return (
    <div className="w-full p-4 gap-4 rounded-lg bg-gray-800 hover:bg-gray-700 flex flex-col">
      <NutrientList title="Macronutrientes" nutrients={macronutrients} />
      <NutrientList title="Micronutrientes" nutrients={micronutrients} />
    </div>
  );
}

export default DietChartArea;
