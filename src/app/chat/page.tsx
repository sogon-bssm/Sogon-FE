'use client';

import ChatInput from '@/features/chat/components/chatInput';
import { useSearchParams } from 'next/navigation';

const Chat = () => {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session'); //session이 있으면 값 반환, 없으면 null

  return (
    <div className="flex w-full flex-col px-4 md:px-8 lg:px-[7.5rem]">
      <div className="flex-1 overflow-y-auto">{sessionId}</div>
      <ChatInput />
    </div>
  );
};
export default Chat;
