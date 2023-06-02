
import { FaArrowCircleDown, FaArrowCircleUp } from 'react-icons/fa';
import {
    ResponsiveContainer,
    LineChart,
    Line
} from "recharts";
const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];
const Scorecards = ({name, growth, growthPercents, isIncrease }) => {
          
    

    return (
        <div className='bg-white rounded-lg col-span-1 p-3'>
            <div>
                <p className='font-bold text-base mb-2'>{name}</p>
            </div>
            <div>
                <div className='flex  w-full justify-between items-center font-semibold mb-2'>
                <p>Today</p>
                <p className='flex  gap-2 items-center'>{growth} {isIncrease ? <FaArrowCircleUp className='text-green-500'></FaArrowCircleUp> : <FaArrowCircleDown className='text-red-500'></FaArrowCircleDown>}</p>
                </div>
                <div>
                    <p className='text-2xl font-bold'>{growthPercents}</p>
                </div>

            </div>

            <div className='my-container flex items-center justify-center'>
                <ResponsiveContainer width="100%" height={50}>
                    <LineChart width="100%" height={100} data={data}>
                        <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            

        </div>
    );
};

export default Scorecards;