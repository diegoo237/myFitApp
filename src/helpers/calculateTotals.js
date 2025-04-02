const calculateTotals = (meals) => {
  return meals
    .flatMap((meal) => meal.items)
    .reduce(
      (acc, item) => ({
        protein: acc.protein + (item.protein || 0),
        carbs: acc.carbs + (item.carbs || 0),
        kcal: acc.kcal + (item.kcal || 0),
        fat: acc.fat + (item.fat || 0),
        fiber: acc.fiber + (item.fiber || 0),
        sodium: acc.sodium + (item.sodium || 0),
        sugar: acc.sugar + (item.sugar || 0),
        iron: acc.iron + (item.iron || 0),
        calcium: acc.calcium + (item.calcium || 0),
        potassium: acc.potassium + (item.potassium || 0),
      }),
      {
        protein: 0,
        carbs: 0,
        kcal: 0,
        fat: 0,
        fiber: 0,
        sodium: 0,
        sugar: 0,
        iron: 0,
        calcium: 0,
        potassium: 0,
      }
    );
};

export default calculateTotals;
