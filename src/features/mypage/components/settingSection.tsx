import Image from 'next/image';
import Link from 'next/link';

interface SettingSectionProps {
  title: string;
  description: string;
  link: string;
}

const SettingSection = ({ title, description, link }: SettingSectionProps) => {
  return (
    <div className="p-sm flex flex-row items-center justify-between">
      <div className="gap-xs flex flex-col">
        <h3 className="text-md font-sans font-semibold text-gray-700">{title}</h3>
        <p className="font-sans text-sm font-medium text-gray-600">{description}</p>
      </div>
      <Link href={link}>
        <Image src="/icon/chevron-right.svg" alt="바로가기 아이콘" width={24} height={24} />
      </Link>
    </div>
  );
};

export default SettingSection;
