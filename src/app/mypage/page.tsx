import ReportActionCard from '@/features/mypage/components/reportActionCard';
import SettingSection from '@/features/mypage/components/settingSection';

const Mypage = () => {
  return (
    <div className="gap-2xl pt-4xl flex w-full flex-col px-4 md:px-8 lg:px-[7.5rem]">
      <div className="gap-sm flex flex-col items-center justify-center">
        <div className="h-[6.5rem] w-[6.5rem] rounded-full bg-gray-400"></div>
        <p className="text-md font-sans font-bold text-gray-800">하린 님</p>
      </div>
      <ReportActionCard />
      <div>
        <h2 className="font-sans text-lg font-semibold text-gray-800">개인 설정</h2>
        <div>
          <SettingSection title="담당 친구 바꾸기" description="고냥이" link="" />
          <SettingSection title="담당 친구 이름 바꾸기" description="고냥이" link="" />
        </div>
      </div>
    </div>
  );
};

export default Mypage;
