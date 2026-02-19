interface FrequencyBarCardProps {
  title: string;
  data: {
    word: string;
    score: number;
  }[];
}

const FrequencyBarCard = ({ title, data }: FrequencyBarCardProps) => {
  return (
    <div className="p-lg gap-md flex w-full flex-col self-stretch rounded-lg border border-gray-300">
      <h2 className="font-sans text-lg font-semibold text-gray-800">{title}</h2>
      <div className="gap-sm flex flex-col">
        {data.map((item) => (
          <div className="flex w-full flex-row items-center justify-between" key={item.word}>
            <p className="font-sans text-sm font-medium text-gray-600">{item.word}</p>
            <div className="bg-primary-300 h-md w-[15.4rem] rounded-full">
              <div
                className="bg-primary-500 h-full rounded-full"
                style={{ width: `${item.score}%` }}
              ></div>
            </div>
            <p className="font-sans text-sm font-medium text-gray-600">{item.score}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default FrequencyBarCard;
