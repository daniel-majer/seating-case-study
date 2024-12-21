type InputProps = {
  type: "password" | "email";
  placeholder: "Password" | "Email";
};

export const Input = ({ type, placeholder }: InputProps) => {
  return (
    <div>
      <label
        htmlFor={type}
        className="mb-2 text-xs dark:text-gray-400 sm:text-lg"
      >
        {placeholder}
      </label>
      <input
        id={type}
        className="w-full rounded-lg border border-gray-300 p-3 text-xs shadow-md duration-300 ease-in-out placeholder:text-xs focus:scale-105 dark:border-gray-700 dark:bg-indigo-700 dark:text-gray-300 sm:text-base sm:placeholder:text-base"
        type={type}
        placeholder={placeholder}
        required
      />
    </div>
  );
};
