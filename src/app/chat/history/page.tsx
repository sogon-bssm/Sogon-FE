'use client';

import ChatPreview from '@/features/chat/components/chatPreview';
import SearchInput from '@/shared/components/ui/searchInput';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const chatMock = [
  {
    chatId: 123,
    title: '저장된 채팅 데이터 1',
    content:
      '솔직히 생각해서 너가 잘못한 거 없어!! 이건 진짜 빼도박도 못한 사실이야. 내가 너였으면 학교 뒤집어 엎었어 진짜 잘했어ㅠㅠ',
    isEnd: true,
    date: '2025-02-10T14:30:00Z',
  },
  {
    chatId: 124,
    title: '저장된 채팅 데이터 2',
    content: '내가 앞으로는 공감도 더 잘해주고 널 더 이해해줄게 진짜진짜 미안해ㅠㅠㅠ',
    isEnd: false,
    date: '2026-02-10T14:30:00Z',
  },
];

const ChatHistory = () => {
  const router = useRouter();

  return (
    <div className="gap-xl flex h-full w-full flex-col px-4 md:px-8 lg:px-[7.5rem]">
      <div className="mt-lg flex w-full flex-row justify-between">
        <div className="gap-sm flex flex-row items-center">
          <button onClick={() => router.back()} className="cursor-pointer">
            <Image src="/icon/chevron-left.svg" alt="뒤로가기 아이콘" width={24} height={24} />
          </button>
          <h2 className="font-sans text-lg font-semibold">채팅 보관함</h2>
        </div>
        <SearchInput />
      </div>
      <div className="gap-base flex h-full flex-col">
        {chatMock.map((item) => (
          <ChatPreview
            key={item.chatId}
            character="ch"
            title={item.title}
            content={item.content}
            isEnd={item.isEnd}
            date={item.date}
          />
        ))}
      </div>
    </div>
  );
};
export default ChatHistory;
