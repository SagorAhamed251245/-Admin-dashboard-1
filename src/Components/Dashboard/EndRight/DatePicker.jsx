import { DateRange } from 'react-date-range';
import { useState } from 'react';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const DatePicker = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection'
    }
  ]);

  return (
    <div className='w-full '>
      <p className="font-bold pl-3 p-3">Period of Sales </p>
      <DateRange
      className='rounded-lg'
        editableDateInputs={true}
        onChange={item => setState([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={state}
        style={{ width: '100%'  }}
      />
    </div>
  );
};

export default DatePicker;
