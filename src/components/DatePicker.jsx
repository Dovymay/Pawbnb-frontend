import { useContext } from 'react';
import DatePicker from 'react-datepicker';
import { PetStayContext } from '../contexts/PetStayContext';

import 'react-datepicker/dist/react-datepicker.css';

const CustomDatePicker = () => {
  const { searchQuery, setSearchQuery } = useContext(PetStayContext);

  return (
    <DatePicker
      startDate={searchQuery.startDate}
      endDate={searchQuery.endDate}
      selected={searchQuery.startDate}
      onChange={(update) => {
        const [start, end] = update;
        setSearchQuery({
          ...searchQuery,
          startDate: start,
          endDate: end,
        });
      }}
      selectsRange={true}
      isClearable={true}
      placeholderText="Check in - Check out"
      className="bg-surfaceLight text-textPrimary px-4 py-2 rounded-xl outline-none w-full test"
    />
  );
};

export default CustomDatePicker;

//Default DatePicker
// import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';

// import 'react-datepicker/dist/react-datepicker.css';

// const CustomDatePicker = () => {
//   const [dateRange, setDateRange] = useState([null, null]);
//   const [startDate, endDate] = dateRange;
//   const { searchQuery, setSearchQuery } = useContext(PetStayContext);

//   return (
//     <DatePicker
//       startDate={startDate}
//       endDate={endDate}
//       onChange={(update) => {
//         setDateRange(update);
//       }}
//       selectsRange={true}
//       isClearable={true}
//       placeholderText="Check in - Check out"
//       className="bg-surfaceLight text-textPrimary px-4 py-2 rounded-xl outline-none w-full test"
//     />
//   );
// };

// export default CustomDatePicker;
