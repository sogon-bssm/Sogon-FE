import { Suspense } from 'react';
import ChatContent from '@/features/chat/components/chatContent';

const Chat = () => {
  return (
    <div className="flex h-full w-full flex-col px-4 md:px-8 lg:px-[7.5rem]">
      <Suspense>
        <ChatContent />
      </Suspense>
    </div>
  );
};
export default Chat;
