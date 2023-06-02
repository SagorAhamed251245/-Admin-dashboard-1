
import { FaChartLine, FaShoppingCart, FaRunning, FaArrowCircleUp, FaArrowCircleDown } from 'react-icons/fa';
import StatisticsChart from './StatisticsChart';

const Statistics = () => {
    return (
        <div className='bg-white rounded-lg col-span-3 row-span-2 font-semibold'>
            <p className='pl-3 pt-3'>Statistics</p>
            <div className='flex  gap-5 justify-start    p-3'>
                <div className='flex justify-center items-center gap-3'>
                    <div className='w-10 h-10 rounded-xl bg-[#69d2ff] flex items-center justify-center' >

                        <FaChartLine className='text-[#0079ba]'></FaChartLine>

                    </div>
                    <div>
                        <p>Visit</p>
                        <div className='flex gap-3'>
                        <p className='font-bold'>9,000 </p>
                        <p className='text-sm flex gap-2 justify-center items-center text-green-500'>12% <FaArrowCircleUp className='text-green-500'></FaArrowCircleUp></p>
                        </div>
                    </div>
                </div>

                <div className='flex justify-center items-center gap-3'>
                    <div className='w-10 h-10 rounded-xl bg-[#6bffc6] flex items-center justify-center' >

                        <FaShoppingCart className='text-[#008842]'></FaShoppingCart>

                    </div>
                    <div>
                        <p>Orders</p>
                        <div className='flex gap-3'>
                        <p className='font-bold'>15,00 </p>
                        <p className='text-sm flex gap-2 justify-center items-center text-green-500'>22% <FaArrowCircleUp className='text-green-500'></FaArrowCircleUp></p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center gap-3'>
                    <div className='w-10 h-10 rounded-xl bg-[#ffbe89] flex items-center justify-center' >

                        < FaRunning className='text-[#991700]'></ FaRunning>

                    </div>
                    <div>
                        <p>Refuses</p>
                        <div className='flex gap-3'>
                        <p className='font-bold'>6,000 </p>
                        <p className='text-sm flex gap-2 justify-center items-center text-red-500'>15% <FaArrowCircleDown className='text-red-500'></FaArrowCircleDown></p>
                        </div>
                    </div>
                </div>
            </div>
            <StatisticsChart></StatisticsChart>
        </div>
    );
};

export default Statistics;