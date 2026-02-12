interface ChatBubbleProps {
  isUser: boolean;
  content: string;
}
const ChatBubble = ({ isUser, content }: ChatBubbleProps) => {
  return (
    <div
      className={`p-base flex w-fit max-w-[45.7rem] rounded-sm border ${isUser ? 'ml-auto border-gray-300 bg-white' : 'bg-primary-300 border-primary-700 mr-auto'}`}
    >
      <p className="font-sans text-sm font-medium">{content}</p>
    </div>
  );
};
export default ChatBubble;
