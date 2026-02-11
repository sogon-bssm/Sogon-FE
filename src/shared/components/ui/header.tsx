import Image from 'next/image';
import Link from 'next/link';
const Header = () => {
  return (
    <header className="py-base fixed top-0 left-0 z-50 flex w-full items-center justify-between border-b border-gray-300 bg-white px-[7.5rem]">
      <Link href={'/'}>
        <Image src="/Logo.svg" alt="소곤 로고" width={86} height={34} className="cursor-pointer" />
      </Link>

      <nav className="text-md gap-base flex font-sans font-semibold text-gray-800">
        <Link href={'/'} className="p-xs flex justify-center">
          대시보드
        </Link>
        <Link href={'/chat'} className="p-xs flex justify-center">
          채팅
        </Link>
        <Link href={'/mypage'} className="p-xs flex justify-center">
          마이페이지
        </Link>
      </nav>
      <div className="gap-xs flex cursor-pointer items-center">
        <p className="font-sans font-semibold text-gray-800">하린 님</p>
        <Image src="/icon/caret-down.svg" alt="드롭다운 표시자 아이콘" width={24} height={24} />
      </div>
    </header>
  );
};
export default Header;
