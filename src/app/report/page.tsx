'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import FrequencyBarCard from '@/features/report/components/frequencyBarCard';
import TopicPieCard from '@/features/report/components/topicPieCard';

const Report = () => {
  const router = useRouter();
  const data = [
    { word: '피곤해', score: 52 },
    { word: '졸려', score: 40 },
    { word: '귀찮아', score: 22 },
    { word: '찌증나', score: 10 },
  ];

  return (
    <div className="gap-xl flex h-full w-full flex-col px-4 md:px-8 lg:px-[7.5rem]">
      <div className="mt-lg gap-sm flex w-full flex-col justify-between">
        <div className="gap-sm flex flex-row items-center">
          <button onClick={() => router.back()} className="cursor-pointer">
            <Image src="/icon/chevron-left.svg" alt="뒤로가기 아이콘" width={24} height={24} />
          </button>
          <h2 className="font-sans text-lg font-semibold text-gray-800">1월 분석 리포트</h2>
        </div>
        <h3 className="text-md font-sans font-semibold text-gray-700">
          친구가 보는 나 리포트의 분석 결과야! 아래 분석 결과를 확인해 볼래?
        </h3>
      </div>
      <div className="p-2xl gap-xl flex w-full flex-row rounded-lg border border-gray-300 bg-white">
        <div className="bg-primary-300 border-primary-700 flex w-full flex-col justify-between rounded-md border">
          <div className="gap-sm p-lg flex flex-col">
            <h1 className="font-sans text-xl font-bold text-gray-800">친구가 보는 너는</h1>
            <Image src="/icon/quotes.svg" alt="따옴표 아이콘" width={24} height={24} />
            <h3 className="text-md font-sans font-semibold text-gray-700">
              겉으로는 시크한데 <br />
              속으로는 친구한테 관심 많은 애
            </h3>
          </div>
          <div className="border-primary-700 gap-md p-lg flex flex-col rounded-md border bg-white">
            <h2 className="font-sans text-lg font-semibold text-gray-800">너의 대화 성향 요약</h2>
            <div className="gap-sm flex flex-col">
              <div className="gap-sm p-sm flex w-full flex-row rounded-sm border border-gray-300 bg-white">
                <Image src="/icon/report/night.svg" alt="밤 아이콘" width={24} height={24} />
                <p className="text-md font-sans font-medium text-gray-700">
                  밤 11시 이후에 깊은 애기
                </p>
              </div>
              <div className="gap-sm p-sm flex w-full flex-row rounded-sm border border-gray-300 bg-white">
                <Image src="/icon/report/night.svg" alt="밤 아이콘" width={24} height={24} />
                <p className="text-md font-sans font-medium text-gray-700">
                  밤 11시 이후에 깊은 애기
                </p>
              </div>
              <div className="gap-sm p-sm flex w-full flex-row rounded-sm border border-gray-300 bg-white">
                <Image src="/icon/report/night.svg" alt="밤 아이콘" width={24} height={24} />
                <p className="text-md font-sans font-medium text-gray-700">
                  밤 11시 이후에 깊은 애기
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="gap-xl flex h-full w-full flex-col">
          <FrequencyBarCard title="사용자가 자주 쓰는 단어" data={data} />
          <FrequencyBarCard title="사용자의 주 감정" data={data} />
        </div>
        <TopicPieCard />
      </div>
    </div>
  );
};
export default Report;
