function MacroLabel({ label, value }) {
  console.log(label);
  return (
    <div
      key={label}
      className="flex bg-green-400 p-1 gap-2 items-center justify-center rounded-lg "
    >
      <span className="font-bold text-sm">{label.charAt(0)}</span>
      <span className="font-bold text-sm">{value.toFixed(1)}</span>
    </div>
  );
}

export default MacroLabel;
