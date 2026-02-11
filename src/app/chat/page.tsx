'use client';

import { useSearchParams } from 'next/navigation';

const Chat = () => {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session'); //session이 있으면 값 반환, 없으면 null

  if (sessionId) return <h1>{sessionId}</h1>;
  return <h1>채팅 페이지입니다</h1>;
};
export default Chat;
