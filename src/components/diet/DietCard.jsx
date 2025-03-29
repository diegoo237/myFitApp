import DietColumn from "./DietColumn";
const meals = [
  {
    time: "07:00",
    items: [
      { food: "Omelete", quantity: "120g", kcal: 140 }, // 2 ovos (~120g)
      { food: "Suco de laranja", quantity: "240g", kcal: 110 }, // 1 copo (~240g de laranja)
      { food: "Pão integral", quantity: "60g", kcal: 130 }, // 2 fatias (~60g)
    ],
  },
  {
    time: "10:00",
    items: [
      { food: "Banana", quantity: "120g", kcal: 90 }, // 1 banana média (~120g)
      { food: "Iogurte natural", quantity: "150g", kcal: 100 }, // 1 pote (~150g)
      { food: "Granola", quantity: "30g", kcal: 120 }, // 2 colheres de sopa (~30g)
    ],
  },
  {
    time: "13:00",
    items: [
      { food: "Arroz integral", quantity: "195g", kcal: 215 }, // 1 xícara cozida (~195g)
      { food: "Peito de frango", quantity: "150g", kcal: 250 }, // 150g
      { food: "Brócolis", quantity: "156g", kcal: 55 }, // 1 xícara (~156g)
    ],
  },
  {
    time: "16:00",
    items: [
      { food: "Batata-doce", quantity: "130g", kcal: 120 }, // 1 unidade média (~130g)
      { food: "Atum", quantity: "140g", kcal: 180 }, // 1 lata (~140g)
      { food: "Abacate", quantity: "100g", kcal: 160 }, // 1/2 unidade (~100g)
    ],
  },
  {
    time: "19:00",
    items: [
      { food: "Quinoa", quantity: "185g", kcal: 220 }, // 1 xícara cozida (~185g)
      { food: "Ovo cozido", quantity: "140g", kcal: 140 }, // 2 ovos (~140g)
      { food: "Salada verde", quantity: "60g", kcal: 20 }, // 2 xícaras (~60g)
    ],
  },
  {
    time: "22:00",
    items: [
      { food: "Shake proteico", quantity: "40g", kcal: 250 }, // 1 dose (~40g)
      { food: "Pasta de amendoim", quantity: "16g", kcal: 95 }, // 1 colher de sopa (~16g)
      { food: "Castanhas", quantity: "30g", kcal: 180 }, // 30g
    ],
  },
];

function DietCard() {
  return (
    <span>
      <h2 className="text-xl text-white font-bold mb-3 bg-graphite-black2 w-fit px-6 py-2">
        Cutting
      </h2>
      <div className=" h-auto text-white bg-graphite-black2 rounded-lg p-7">
        <div className="flex gap-7">
          {meals.map((column, index) => (
            <DietColumn key={index} column={column} />
          ))}
        </div>
      </div>
    </span>
  );
}

export default DietCard;
