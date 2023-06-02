

import { LineChart, Line, XAxis, YAxis,  ResponsiveContainer } from 'recharts';

const data = [
    {
        name: '2am',
        uv: 4000,
        pv: 100,
        amt: 2400,
    },
    {
        name: '4am',
        uv: 3000,
        pv: 598,
        amt: 2210,
    },
    {
        name: '6am',
        uv: 2000,
        pv: 200,
        amt: 2290,
    },
    {
        name: '8am',
        uv: 2780,
        pv: 308,
        amt: 2000,
    },
    {
        name: '10am',
        uv: 1890,
        pv: 700,
        amt: 7581,
    },
    {
        name: '12am',
        uv: 2390,
        pv: 800,
        amt: 7000,
    },
    {
        name: '2pm',
        uv: 9500,
        pv: 3500,
        amt: 6000,
    },
];





const StatisticsChart = () => {
    return (
        <div className="pt-3 pl-3 pr-3">
            <div className='my-container flex items-center justify-center'>
                <ResponsiveContainer width="100%" height={200}>
                   
                    <LineChart width="100%" height={100} data={data}>
                    <XAxis dataKey="name" />
                    <YAxis />
                        <Line type="monotone" dataKey="uv" stroke="#0079ba" strokeWidth={2} />
                        <Line type="monotone" dataKey="pv" stroke="#008842" strokeWidth={2} />
                        <Line type="monotone" dataKey="amt" stroke="#991700" strokeWidth={2} />
                       
                    
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default StatisticsChart;