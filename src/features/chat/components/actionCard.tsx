import Image from 'next/image';
interface ActionCardProps {
  name: 'character' | 'store';
  title: string;
  description: string;
}
const ActionCard = ({ name, title, description }: ActionCardProps) => {
  return (
    <div className="p-lg gap-base flex w-full flex-1 flex-col justify-end rounded-sm border border-gray-300 bg-white">
      <div className="gap-md flex w-full flex-col font-sans">
        <div className="gap-sm flex flex-row">
          <Image src={`/icon/${name}.svg`} alt={`${name} 아이콘`} width={24} height={24} />
          <h3 className="text-md font-gray-800 font-semibold">{title}</h3>
        </div>
        <p className="font-gray-600 text-sm font-medium">{description}</p>
      </div>
      <button className="gap-xs flex w-fit cursor-pointer flex-row items-center self-end border-b border-white hover:border-gray-400">
        <p className="font-gray-400 font-regular text-xs">바로가기</p>
        <Image src="/icon/arrow-right.svg" alt="바로가기 아이콘" width={16} height={16} />
      </button>
    </div>
  );
};
export default ActionCard;
