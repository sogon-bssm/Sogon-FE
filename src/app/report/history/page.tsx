import ReportPreview from '@/features/report/components/reportPreview';
import PageHeader from '@/shared/components/ui/pageHeader';
import SearchInput from '@/shared/components/ui/searchInput';

const reportMock = [
  {
    reportId: 123,
    title: '1월 분석 리포트',
    summary: '겉으론 시크한데\n속으론 친구들한테 관심 많은 애',
    analysis: { frequentWord: '피곤해', mainTopic: '학교', mainEmotion: '피곤함' },
    createdAt: '2025-01-10T14:30:00Z',
  },
  {
    reportId: 124,
    title: '2월 분석 리포트',
    summary: '겉으론 시크한데\n속으론 친구들한테 관심 많은 애',
    analysis: { frequentWord: '귀찮다', mainTopic: '공부', mainEmotion: '지루함' },
    createdAt: '2025-02-10T14:30:00Z',
  },
  {
    reportId: 125,
    title: '3월 분석 리포트',
    summary: '겉으론 시크한데\n속으론 친구들한테 관심 많은 애',
    analysis: { frequentWord: '어떡해', mainTopic: '숙제', mainEmotion: '두려움' },
    createdAt: '2025-03-10T14:30:00Z',
  },
];

const ChatHistory = () => {
  return (
    <div className="gap-xl pt-4xl flex h-full w-full flex-col px-4 md:px-8 lg:px-[7.5rem]">
      <div className="mt-lg flex w-full flex-row justify-between">
        <PageHeader title="친구가 보는 나 리포트" />
        <SearchInput />
      </div>
      <div className="gap-base grid h-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {reportMock.map((item) => (
          <ReportPreview
            key={item.reportId}
            reportId={item.reportId}
            title={item.title}
            summary={item.summary}
            analysis={item.analysis}
            createdAt={item.createdAt}
          />
        ))}
      </div>
    </div>
  );
};

export default ChatHistory;
