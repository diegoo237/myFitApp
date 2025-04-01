function TextInput({ label, value, onChange, placeholder }) {
  return (
    <div className="flex flex-col">
      <label className="text-gray-300 font-mplus">{label}</label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        aria-label={label}
        className="h-11 bg-graphite-black px-1.5 border-neutral-gray border-2 rounded"
        required
      />
    </div>
  );
}

export default TextInput;
