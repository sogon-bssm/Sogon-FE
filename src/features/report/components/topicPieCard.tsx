'use client';

import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: '학교 이야기', value: 40 },
  { name: '성적', value: 30 },
  { name: '취미', value: 20 },
  { name: '기타', value: 10 },
];
const COLORS = ['#FAE26D', '#FDF0A0', '#F5D845', '#E7CA48', '#D4B83A', '#FFF3B0', '#C8A82A'];

const TopicPieCard = () => {
  return (
    <div className="gap-xl p-lg flex w-full flex-col self-stretch rounded-lg border border-gray-300 bg-white">
      <h2 className="font-sans text-lg font-semibold text-gray-800">자주 사용하는 대화 주제</h2>

      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie data={data} cx="50%" cy="50%" outerRadius={100} dataKey="value">
            {data.map((_, idx) => (
              <Cell key={idx} fill={COLORS[idx % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="gap-md flex flex-row">
        {data.map((item, idx) => (
          <div key={idx} className="gap-xs flex flex-row items-center">
            <div className="h-base w-base rounded-xs" style={{ background: COLORS[idx] }}></div>
            <p className="font-sans text-sm font-semibold">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default TopicPieCard;
