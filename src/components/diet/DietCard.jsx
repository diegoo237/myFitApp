import DietColumn from "./DietColumn";
import DietChartArea from "./DietChartArea";

function DietCard({ diet }) {
  return (
    <span>
      <h2 className="text-xl text-white font-bold mb-3 bg-graphite-black2 w-fit px-6 py-2 ">
        {diet.name}
      </h2>
      <div className="flex h-auto text-white bg-graphite-black2 gap-4 rounded-lg p-7">
        <div className="grid grid-cols-3 gap-4">
          {diet.meals.map((column, index) => (
            <DietColumn key={index} column={column} />
          ))}
        </div>
        <DietChartArea meals={diet.meals} />
      </div>
    </span>
  );
}

export default DietCard;
