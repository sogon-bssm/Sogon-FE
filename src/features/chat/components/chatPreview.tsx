import Image from 'next/image';
import { getTimeAgo } from '@/shared/utils/date';

interface ChatPreviewProps {
  character: string; // todo: 캐릭터 이름 유니온 타입으로 수정
  title: string;
  content: string;
  isEnd: boolean;
  date: string;
}

const ChatPreview = ({ character, title, content, isEnd, date }: ChatPreviewProps) => {
  const datetime = getTimeAgo(date);
  return (
    <div className="p-lg gap-xl flex cursor-pointer flex-row items-start rounded-sm border border-gray-300 bg-white hover:brightness-94">
      <Image src="/icon/character-icon.svg" alt="캐릭터 아이콘" width={48} height={48} />
      <div className="gap-xs flex flex-1 flex-col font-sans">
        <div className="gap-xs flex flex-row">
          <h2 className="truncate text-lg font-semibold text-gray-800">{title}</h2>
          <div className="font-regular text-primary-700 bg-primary-300 px-md py-xs rounded-full text-xs">
            {isEnd ? '완료됨' : '진행중'}
          </div>
        </div>
        <p className="line-clamp-3 text-sm font-medium text-gray-600">{content}</p>
        <p className="font-regular text-xs text-gray-600">{datetime}</p>
      </div>
      <button className="cursor-pointer">
        <Image src="/icon/more-vertical.svg" alt="더보기 아이콘" width={24} height={24} />
      </button>
    </div>
  );
};
export default ChatPreview;
