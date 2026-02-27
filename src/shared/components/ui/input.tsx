interface InputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  id?: string;
}

export default function Input({ type, placeholder, value, onChange, label, id }: InputProps) {
  const inputId = id ?? label;

  return (
    <div className="flex w-[584px] flex-col items-start justify-start gap-[5px]">
      {label && (
        <label htmlFor={inputId} className="items-start justify-start font-['Pretendard'] text-xs text-zinc-800">
          {label}
        </label>
      )}

      <input
        id={inputId}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="h-[46px] w-full rounded-sm border border-zinc-400 bg-white px-3 font-['Pretendard'] text-sm text-zinc-500"
      />
    </div>
  );
}
