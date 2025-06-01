import { ComponentProps } from "react";

type InputProps = {
  type: string;
  placeholder: string;
  onSet: (input: string) => void;
  value?: string;
  label: string;
} & ComponentProps<"input">;

export const Input = ({
  type,
  placeholder,
  onSet,
  value,
  label,
  ...props
}: InputProps) => {
  return (
    <div>
      <label htmlFor={label} className="mb-2 text-xs sm:text-lg">
        {placeholder}
      </label>
      <input
        id={label}
        onChange={(event) => onSet(event.target.value)}
        className="w-full rounded-lg border border-gray-300 p-3 text-xs shadow-md duration-500 ease-in-out placeholder:text-xs focus:scale-105 dark:text-slate-900 sm:text-base sm:placeholder:text-base"
        type={type}
        placeholder={placeholder}
        required
        value={value}
        {...props}
      />
    </div>
  );
};
