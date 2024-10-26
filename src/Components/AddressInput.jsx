const AddressInput = ({ label, value, onChange, onRemove }) => {
  return (
    <div className="relative">
      <label className="block mb-1">{label}</label>
      <input
        type="text"
        value={value || ""}
        onChange={onChange}
        className="w-full p-2 border border-gray-300 rounded-lg"
        placeholder="e.g., 1234 Elm St, Springfield, USA"
      />
      <button
        type="button"
        onClick={onRemove}
        className="absolute top-0 right-0 p-2 text-red-500"
      >
        &#10005;
      </button>
    </div>
  );
};

export default AddressInput;
