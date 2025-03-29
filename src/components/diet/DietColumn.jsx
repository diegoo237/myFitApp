import DietLine from "./DietLine";

function DietColumn({ column }) {
  return (
    <div className="w-64 p-7 gap-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all flex flex-col shadow-md">
      <h3 className="text-xl font-semibold text-green-400">{column.time}</h3>
      <span className="flex flex-col gap-4">
        {column.items.map((item, index) => (
          <DietLine key={index} item={item} />
        ))}
      </span>
    </div>
  );
}

export default DietColumn;
