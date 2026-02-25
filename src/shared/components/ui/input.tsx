interface InputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
}

export default function Input({ type, placeholder, value, onChange, label }: InputProps) {
  return (
    <div className="flex w-[584px] flex-col items-start justify-start gap-[5px]">
      {label && (
        <label className="items-start justify-start font-['Pretendard'] text-xs text-zinc-800">
          {label}
        </label>
      )}

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="h-[46px] w-full rounded-sm border border-zinc-400 px-3 font-['Pretendard'] text-sm text-zinc-500"
      />
    </div>
  );
}
