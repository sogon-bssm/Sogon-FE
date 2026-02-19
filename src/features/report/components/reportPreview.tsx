import { formatDate } from '@/shared/utils/date';
import Image from 'next/image';
import Link from 'next/link';

interface reportPreviewProps {
  reportId: number;
  title: string;
  summary: string;
  analysis: {
    frequentWord: string;
    mainTopic: string;
    mainEmotion: string;
  };
  createdAt: string;
}

const ReportPreview = ({ reportId, title, summary, analysis, createdAt }: reportPreviewProps) => {
  const date = formatDate(createdAt);
  return (
    <div className="p-lg gap-base flex flex-col rounded-md border border-gray-300 bg-white">
      <div className="gap-xs flex flex-col">
        <p className="font-regular font-sans text-xs text-gray-400">{date}</p>
        <h2 className="font-sans text-lg font-semibold text-gray-800">{title}</h2>
      </div>
      <div className="bg-primary-300 border-primary-700 p-base gap-sm flex flex-col rounded-lg border-l-2">
        <p className="font-sans text-sm font-medium text-gray-600">친구들이 보는 너는</p>
        <Image src="/icon/quotes.svg" alt="따옴표 아이콘" width={24} height={24} />
        <h3 className="text-md font-sans font-semibold whitespace-pre-line text-gray-700">
          {summary}
        </h3>
      </div>
      <div className="gap-xs flex flex-col">
        <div className="flex flex-row items-center justify-between">
          <p className="font-sans text-sm font-medium text-gray-600">가장 많이 쓴 단어</p>
          <p className="font-sans text-sm font-medium text-gray-700">{analysis.frequentWord}</p>
        </div>
        <div className="flex flex-row items-center justify-between">
          <p className="font-sans text-sm font-medium text-gray-600">주요 감정</p>
          <p className="font-sans text-sm font-medium text-gray-700">{analysis.mainEmotion}</p>
        </div>
        <div className="flex flex-row items-center justify-between">
          <p className="font-sans text-sm font-medium text-gray-600">주요 대화 주제</p>
          <p className="font-sans text-sm font-medium text-gray-700">{analysis.mainTopic}</p>
        </div>
      </div>
      <Link
        href={`/report?id=${reportId}`}
        className="text-md text-primary-700 w-full cursor-pointer text-center font-sans underline hover:brightness-90"
      >
        자세히 보기
      </Link>
    </div>
  );
};

export default ReportPreview;
