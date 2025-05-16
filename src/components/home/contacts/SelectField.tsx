
interface SelectOption {
  value: string;
  label: string;
}

interface SelectFieldProps {
  id: string;
  label: string;
  placeholder?: string;
  options: SelectOption[];
  required?: boolean;
}

export const SelectField = ({ id, label, placeholder, options, required = false }: SelectFieldProps) => {
  return (
    <div>
      <label htmlFor={id} className="block text-white/80 text-sm mb-2">
        {label}{required && <span className="text-gold ml-1">*</span>}
      </label>
      <select 
        id={id} 
        className="w-full bg-[#252525] border border-gold/20 rounded-sm px-4 py-2 text-white focus:border-gold/50 focus:outline-none transition-colors"
        required={required}
      >
        {placeholder && (
          <option value="" disabled selected>{placeholder}</option>
        )}
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
