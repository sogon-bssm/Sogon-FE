'use client';

import ChatInput from '@/features/chat/components/chatInput';
import { useSearchParams } from 'next/navigation';

const Chat = () => {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session'); //session이 있으면 값 반환, 없으면 null

  if (sessionId) return <h1>{sessionId}</h1>;
  return (
    <div className="w-full px-4 md:px-8 lg:px-[7.5rem]">
      <ChatInput />
    </div>
  );
};
export default Chat;
