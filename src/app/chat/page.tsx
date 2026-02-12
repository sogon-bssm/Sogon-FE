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
    chatId: 124,
    isUser: false,
    content: '허거덩 허거덩스',
  },
  {
    chatId: 125,
    isUser: true,
    content:
      '너 왜 공감을 그거밖에 안 해줘? 진짜 실망이야 이제부터 다른 캐릭ㅌ처랑 대화할거야 너랑 대화 안할래. 마지막 기회다 제대로 대답해 나랑 계속 얘기하고 싶으면...',
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
  {
    chatId: 130,
    isUser: false,
    content: '무슨 일이야!!!',
  },
  {
    chatId: 131,
    isUser: true,
    content:
      '솔직히 무슨 일 있었는지는 못말하겠는데 그렇지만 너가 날 위로해주고 내 탓 아니라고 하고 내 잘못 하나도 없고 수고했다고 말해주면 좋겠어... 근데 내가 무슨 일 있었는지는 못 말해 알겠지?',
  },
  {
    chatId: 132,
    isUser: false,
    content:
      '네가 무슨 일 있었는지 말도 안하고 내가 너의 잘못이 아니라고 단정 지을 수는 없어... 너가 잘못했을 수도 있잖아',
  },
  {
    chatId: 133,
    isUser: true,
    content: '너랑 대화 안해...',
  },
];

const Chat = () => {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session'); //session이 있으면 값 반환, 없으면 null

  return (
    <div className="flex h-full w-full flex-col px-4 md:px-8 lg:px-[7.5rem]">
      <div className="space-y-base flex-1">
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
