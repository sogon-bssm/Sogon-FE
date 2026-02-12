import Image from 'next/image';
import Link from 'next/link';

interface ActionCardProps {
  name: 'character' | 'store';
  title: string;
  description: string;
  link?: string;
  onClick?: () => void;
}
const ActionCard = ({ name, title, description, link, onClick }: ActionCardProps) => {
  return (
    <div className="p-lg gap-base flex w-full flex-1 flex-col justify-end rounded-sm border border-gray-300 bg-white">
      <div className="gap-sm flex w-full flex-col font-sans">
        <div className="gap-sm flex flex-row">
          <Image src={`/icon/${name}.svg`} alt={`${name} 아이콘`} width={24} height={24} />
          <h3 className="text-md font-semibold text-gray-800">{title}</h3>
        </div>
        <p className="text-sm font-medium text-gray-600">{description}</p>
      </div>
      {link ? (
        <Link
          href={link}
          className="gap-xs flex w-fit cursor-pointer flex-row items-center self-end border-b border-white hover:border-gray-400"
        >
          <p className="font-regular text-xs text-gray-600">바로가기</p>
          <Image src="/icon/arrow-right.svg" alt="바로가기 아이콘" width={16} height={16} />
        </Link>
      ) : (
        <button
          onClick={onClick}
          className="gap-xs flex w-fit cursor-pointer flex-row items-center self-end border-b border-white hover:border-gray-400"
        >
          <p className="font-regular text-xs text-gray-600">바로가기</p>
          <Image src="/icon/arrow-right.svg" alt="바로가기 아이콘" width={16} height={16} />
        </button>
      )}
    </div>
  );
};
export default ActionCard;
