function Label({ label, value, color }) {
  return (
    <div
      className={`${color} flex bg-green-400 p-1 gap-2 items-center justify-center rounded-lg`}
    >
      <span className="font-bold text-sm">{label.charAt(0)}</span>
      <span className="font-bold text-sm">{(value ?? 0).toFixed(1)}</span>
    </div>
  );
}

export default Label;
