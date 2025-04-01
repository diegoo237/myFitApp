import DietCard from "../components/diet/DietCard";
const diets = [
  {
    name: "Dieta 1",
    meals: [
      {
        time: "07:00",
        items: [
          {
            food: "Omelete",
            quantity: "120g",
            kcal: 140,
            protein: 12,
            carbs: 1,
            fat: 10,
          },
          {
            food: "Suco de laranja",
            quantity: "240g",
            kcal: 110,
            protein: 2,
            carbs: 26,
            fat: 0,
          },
          {
            food: "Pão integral",
            quantity: "60g",
            kcal: 130,
            protein: 5,
            carbs: 23,
            fat: 2,
          },
        ],
      },
      {
        time: "10:00",
        items: [
          {
            food: "Banana",
            quantity: "120g",
            kcal: 90,
            protein: 1,
            carbs: 23,
            fat: 0.3,
          },
          {
            food: "Iogurte natural",
            quantity: "150g",
            kcal: 100,
            protein: 8,
            carbs: 7,
            fat: 5,
          },
          {
            food: "Granola",
            quantity: "30g",
            kcal: 120,
            protein: 3,
            carbs: 20,
            fat: 4,
          },
        ],
      },
      {
        time: "13:00",
        items: [
          {
            food: "Arroz integral",
            quantity: "195g",
            kcal: 215,
            protein: 5,
            carbs: 45,
            fat: 2,
          },
          {
            food: "Peito de frango",
            quantity: "150g",
            kcal: 250,
            protein: 40,
            carbs: 0,
            fat: 5,
          },
          {
            food: "Brócolis",
            quantity: "156g",
            kcal: 55,
            protein: 5,
            carbs: 11,
            fat: 0.6,
          },
        ],
      },
    ],
  },
  {
    name: "Dieta 2",
    meals: [
      {
        time: "07:00",
        items: [
          {
            food: "Tapioca",
            quantity: "100g",
            kcal: 150,
            protein: 1,
            carbs: 38,
            fat: 0.2,
          },
          {
            food: "Queijo cottage",
            quantity: "50g",
            kcal: 55,
            protein: 6,
            carbs: 2,
            fat: 2,
          },
          {
            food: "Mamão",
            quantity: "120g",
            kcal: 45,
            protein: 1,
            carbs: 11,
            fat: 0.2,
          },
        ],
      },
      {
        time: "10:00",
        items: [
          {
            food: "Maçã",
            quantity: "130g",
            kcal: 70,
            protein: 0.5,
            carbs: 18,
            fat: 0.2,
          },
          {
            food: "Pasta de amendoim",
            quantity: "16g",
            kcal: 95,
            protein: 4,
            carbs: 3,
            fat: 8,
          },
          {
            food: "Iogurte grego",
            quantity: "150g",
            kcal: 120,
            protein: 10,
            carbs: 9,
            fat: 4,
          },
        ],
      },
      {
        time: "13:00",
        items: [
          {
            food: "Macarrão integral",
            quantity: "200g",
            kcal: 260,
            protein: 9,
            carbs: 52,
            fat: 2,
          },
          {
            food: "Carne vermelha",
            quantity: "150g",
            kcal: 280,
            protein: 32,
            carbs: 0,
            fat: 18,
          },
          {
            food: "Salada de folhas",
            quantity: "80g",
            kcal: 30,
            protein: 2,
            carbs: 5,
            fat: 0.5,
          },
        ],
      },
    ],
  },
];
function Diet() {
  return (
    <main className=" bg-graphite-black flex flex-col py-10 gap-8 items-center">
      {diets.map((diet, index) => (
        <DietCard key={index} diet={diet} />
      ))}
    </main>
  );
}

export default Diet;
