import Image from 'next/image';

const ChatInput = () => {
  return (
    <div className="p-base gap-base mb-[3rem] flex w-full flex-col justify-end rounded-sm border border-gray-300 bg-white">
      <input
        type="text"
        placeholder="무엇이든 말해보세요!"
        className="w-full font-sans text-sm font-medium outline-none placeholder:text-gray-400"
      />
      <div className="gap-md flex w-full flex-row justify-end">
        <button className="text-md font-gray-800 cursor-pointer font-sans font-semibold">
          끝났어요
        </button>
        <button className="cursor-pointer">
          <Image src="/icon/upload.svg" alt="업로드 버튼" width={24} height={24} />
        </button>
      </div>
    </div>
  );
};
export default ChatInput;
