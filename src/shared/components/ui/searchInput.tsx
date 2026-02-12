import Image from 'next/image';
const SearchInput = () => {
  return (
    <div className="p-sm gap-sm flex w-[32rem] rounded-sm border border-gray-300 bg-white">
      <Image src="/icon/search.svg" alt="검색 아이콘" width={24} height={24} />
      <input
        type="text"
        placeholder="검색어를 입력해주세요"
        className="w-full font-sans text-sm font-medium text-gray-800 outline-none placeholder:text-gray-600"
      />
    </div>
  );
};

export default SearchInput;
