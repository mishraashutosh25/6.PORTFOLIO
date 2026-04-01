export default function InputField({ label, name, type = "text", register, error, placeholder, rows, options }) {
  const commonClasses = `p-3 rounded-md bg-white/10 border ${
    error ? "border-red-500" : "border-gray-500"
  } text-white focus:outline-none w-full`;

  return (
    <div className="flex flex-col">
      <label className="mb-1">
        {label} <span className="text-red-500">*</span>
      </label>

      {type === "textarea" ? (
        <textarea
          rows={rows || 5}
          placeholder={placeholder}
          {...register(name)}
          className={commonClasses}
        />
      ) : type === "select" ? (
        <select {...register(name)} className={commonClasses}>
          <option value="" disabled>Select an option</option>
          {options?.map((opt) => (
            <option key={opt} value={opt} className="text-black">
              {opt}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          {...register(name)}
          className={commonClasses}
        />
      )}

      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
}
