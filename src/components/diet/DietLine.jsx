function DietLine({ item }) {
  return (
    <>
      <div>
        <div className="flex justify-between">
          <p className="text-sm">{item.food}</p>
          <p className="text-sm">{item.quantity}</p>
        </div>
        <p className="text-sm">{item.kcal}</p>
      </div>
    </>
  );
}

export default DietLine;
