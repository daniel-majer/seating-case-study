type InputProps = {
  type: string;
  placeholder: string;
  onSet: (input: string) => void;
  value?: string;
  label: string;
};

export const Input = ({
  type,
  placeholder,
  onSet,
  value,
  label,
}: InputProps) => {
  return (
    <div>
      <label htmlFor={label} className="mb-2 text-xs sm:text-lg">
        {placeholder}
      </label>
      <input
        id={label}
        onChange={(event) => onSet(event.target.value)}
        className="w-full rounded-lg border border-gray-300 p-3 text-xs shadow-md duration-500 ease-in-out placeholder:text-xs focus:scale-105 sm:text-base sm:placeholder:text-base dark:text-slate-900"
        type={type}
        placeholder={placeholder}
        required
        value={value}
      />
    </div>
  );
};
