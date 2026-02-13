'use client';

import ActionCard from '@/features/chat/components/actionCard';
import ChatBubble from '@/features/chat/components/chatBubble';
import ChatInput from '@/features/chat/components/chatInput';
import { useSearchParams } from 'next/navigation';

const chatMock = [
  {
    chatId: 123,
    isUser: true,
    content:
      '아니, 나 오늘 너무 힘들었어... 진짜 너무 힘들어서 말이 안나옫ㄴ다. 그냥 아무것도안 하고 싶어 너무 지친다. 진짜 다 냅두고 냅다 집에 가버리고 싶다 ',
  },
  {
    chatId: 126,
    isUser: false,
    content: '진짜 힘들었겠다 ㅠㅠ',
  },
  {
    chatId: 127,
    isUser: true,
    content: '맞아... 나 너무 힘들었어. 근데 너가 몰라줘서 더 힘들었던 것 같아.',
  },
  {
    chatId: 128,
    isUser: false,
    content: '내가 앞으로는 공감도 더 잘해주고 널 더 이해해줄게 진짜진짜 미안해ㅠㅠㅠ',
  },
  {
    chatId: 129,
    isUser: true,
    content: '진짜 힘들e다',
  },
];

const ChatContent = () => {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session'); //session이 있으면 값 반환, 없으면 null

  return (
    <>
      <div className="space-y-base min-h-screen flex-1">
        {!!sessionId &&
          chatMock.map((item) => (
            <ChatBubble key={item.chatId} isUser={item.isUser} content={item.content} />
          ))}
      </div>
      <div className="gap-base sticky bottom-0 z-5 flex flex-col bg-gray-200">
        {!!sessionId || (
          <div className="gap-sm flex w-full flex-row">
            <ActionCard
              name="character"
              title="캐릭터 변경하기"
              description="다른 친구와 이야기 해보고 싶나요? 다른 캐릭터로 변경하여 대화해볼 수 있어요!"
              onClick={() => console.log('클릭')}
            />
            <ActionCard
              name="store"
              title="채팅 이어하기"
              description="보관된 채팅을 확인하거나, 채팅을 이어갈 수 있어요!"
              link="/chat/history"
            />
          </div>
        )}
        <ChatInput />
      </div>
    </>
  );
};
export default ChatContent;
