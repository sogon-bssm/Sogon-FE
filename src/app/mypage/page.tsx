import ReportActionCard from '@/features/mypage/components/reportActionCard';

const Mypage = () => {
  return (
    <div className="gap-2xl flex w-full flex-col px-4 md:px-8 lg:px-[7.5rem]">
      <div className="gap-sm flex flex-col items-center justify-center">
        <div className="h-[6.5rem] w-[6.5rem] rounded-full bg-gray-400"></div>
        <p className="text-md font-sans font-bold text-gray-800">하린 님</p>
      </div>
      <ReportActionCard />
      <div>
        <h2>개인 설정</h2>
        <div>
          <div>
            <h3>담당 친구 바꾸기</h3>
            <p>고냥이</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mypage;
