
interface TextareaFieldProps {
  id: string;
  label: string;
  placeholder?: string;
  rows?: number;
  required?: boolean;
}

export const TextareaField = ({ id, label, placeholder, rows = 3, required = false }: TextareaFieldProps) => {
  return (
    <div>
      <label htmlFor={id} className="block text-white/80 text-sm mb-2">
        {label}{required && <span className="text-gold ml-1">*</span>}
      </label>
      <textarea 
        id={id} 
        rows={rows} 
        className="w-full bg-[#252525] border border-gold/20 rounded-sm px-4 py-2 text-white focus:border-gold/50 focus:outline-none resize-none transition-colors"
        placeholder={placeholder}
        required={required}
      ></textarea>
    </div>
  );
};
