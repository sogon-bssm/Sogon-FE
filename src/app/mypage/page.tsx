import Link from 'next/link';
import Image from 'next/image';

const Mypage = () => {
  return (
    <div className="gap-2xl flex w-full flex-col px-4 md:px-8 lg:px-[7.5rem]">
      <div className="gap-sm flex flex-col items-center justify-center">
        <div className="h-[6.5rem] w-[6.5rem] rounded-full bg-gray-400"></div>
        <p className="text-md font-sans font-bold text-gray-800">하린 님</p>
      </div>
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
      <div>
        <h2>개인 설정</h2>
        <div>
          <div>
            <h3>담당 친구 바꾸기</h3>
            <p>고냥이</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mypage;
