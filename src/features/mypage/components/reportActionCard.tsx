import Link from 'next/link';
import Image from 'next/image';

const ReportActionCard = () => {
  return (
    <Link
      href={'/report/history'}
      className="p-base gap-sm flex cursor-pointer flex-col rounded-md border border-gray-300 bg-white"
    >
      <div className="flex flex-row items-center justify-between">
        <h3 className="text-md font-sans font-semibold text-gray-700">
          친구가 보는 나 리포트 보관함
        </h3>
        <button>
          <Image src="/icon/help-circle.svg" alt="도움 아이콘" width={24} height={24} />
        </button>
      </div>
      <p className="font-sans text-sm font-medium text-gray-500">0</p>
    </Link>
  );
};

export default ReportActionCard;
