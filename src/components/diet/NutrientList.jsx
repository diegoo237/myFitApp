import Label from "./Label";

const NutrientList = ({ title, nutrients }) => (
  <div className="p-3 flex flex-col gap-3 rounded-lg">
    <span className="font-bold text-sm">{title}</span>

    <span className="flex gap-4">
      {nutrients.map(({ label, value, color }) => (
        <Label key={label} label={label} value={value} color={color} />
      ))}
    </span>
  </div>
);
export default NutrientList;
