'use client';

import ActionCard from '@/features/chat/components/actionCard';
import ChatInput from '@/features/chat/components/chatInput';
import { useSearchParams } from 'next/navigation';

const Chat = () => {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session'); //session이 있으면 값 반환, 없으면 null

  return (
    <div className="flex w-full flex-col px-4 md:px-8 lg:px-[7.5rem]">
      <div className="flex-1 overflow-y-auto">{sessionId}</div>
      <div className="gap-base flex flex-col">
        {sessionId || (
          <div className="gap-sm flex w-full flex-row">
            <ActionCard
              name="character"
              title="캐릭터 변경하기"
              description="다른 친구와 이야기 해보고 싶나요? 다른 캐릭터로 변경하여 대화해볼 수 있어요!"
            />
            <ActionCard
              name="store"
              title="채팅 이어하기"
              description="보관된 채팅을 확인하거나, 채팅을 이어갈 수 있어요!"
            />
          </div>
        )}
        <ChatInput />
      </div>
    </div>
  );
};
export default Chat;
