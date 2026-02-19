interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
  icon?: React.ReactNode;
  variant?: 'primary' | 'oauth';
}

export default function Button({
  children,
  onClick,
  type = 'button',
  disabled = false,
  icon,
  variant = 'primary',
}: ButtonProps) {
  const baseStyle =
    "h-[46px] w-[584px] rounded-sm font-['Pretendard'] text-sm font-medium transition-colors disabled:cursor-not-allowed";

  const variantStyles = {
    primary:
      'border border-primary-700 bg-primary-500 text-zinc-800 hover:bg-primary-700 disabled:bg-gray-400',
    oauth: 'bg-white text-zinc-800 border border-zinc-300 hover:bg-gray-400 disabled:bg-gray-100',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyle} ${variantStyles[variant]} ${icon ? 'flex items-center justify-center gap-2' : ''}`}
    >
      {icon && <span className="flex items-center">{icon}</span>}
      {children}
    </button>
  );
}
