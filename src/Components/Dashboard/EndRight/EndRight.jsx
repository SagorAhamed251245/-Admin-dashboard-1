import DatePicker from "./DatePicker";
import EndStatistics from "./EndStatistics";
import TotalSales from "./TotalSales";


const EndRight = () => {
    return (
        <div className='bg-white rounded-lg row-span-4 pl-3 pr-3'>
            <DatePicker></DatePicker>
            <EndStatistics></EndStatistics>
            <TotalSales></TotalSales>
        </div>
    );
};

export default EndRight;