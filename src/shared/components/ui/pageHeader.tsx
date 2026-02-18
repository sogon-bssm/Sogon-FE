'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

const PageHeader = ({ title }: { title: string }) => {
  const router = useRouter();
  return (
    <div className="gap-sm flex flex-row items-center">
      <button onClick={() => router.back()} className="cursor-pointer">
        <Image src="/icon/chevron-left.svg" alt="뒤로가기 아이콘" width={32} height={32} />
      </button>
      <h2 className="font-sans text-xl font-bold text-gray-800">{title}</h2>
    </div>
  );
};

export default PageHeader;
