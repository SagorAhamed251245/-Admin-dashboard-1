
import { BarChart, Bar,  XAxis, YAxis,  ResponsiveContainer } from 'recharts';

const data = [
  {
    
    name: 'item1',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'item2',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'item3',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'item4',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'item5',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'item6',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'item7',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];


const EndStatistics = () => {
    return (
        <div>
            <p className='pl-3 pt-3 font-bold'>Statistics</p>
            <div className='my-container flex items-center justify-center mt-3'>
            
            <ResponsiveContainer width="100%" height={140}>
               
                <BarChart width="100%" height={100} data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Bar dataKey="pv" fill="#8884d8" />
      <Bar dataKey="uv" fill="#82ca9d" />
                   
                
                </BarChart>
            </ResponsiveContainer>
        </div>
        </div>
    );
};

export default EndStatistics;