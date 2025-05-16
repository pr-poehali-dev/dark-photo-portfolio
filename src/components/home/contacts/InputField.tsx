
interface InputFieldProps {
  id: string;
  label: string;
  type: string;
  placeholder?: string;
  required?: boolean;
}

export const InputField = ({ id, label, type, placeholder, required = false }: InputFieldProps) => {
  return (
    <div>
      <label htmlFor={id} className="block text-white/80 text-sm mb-2">
        {label}{required && <span className="text-gold ml-1">*</span>}
      </label>
      <input 
        type={type} 
        id={id} 
        className="w-full bg-[#252525] border border-gold/20 rounded-sm px-4 py-2 text-white focus:border-gold/50 focus:outline-none transition-colors"
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};
