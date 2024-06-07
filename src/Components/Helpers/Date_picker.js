import React from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { fa_time } from './Date_formet';

const Date_picker = ({selectDate,setSelectDate}) => {
  return (
    <div className="d-flex">
    <h6 className="m-2">Select a date:</h6>
    <DatePicker
      selected={selectDate && fa_time(selectDate)}
      onChange={(e) => setSelectDate(e)}
      maxDate={new Date()}
      className="custom-datepicker"
      placeholderText="Select Date"
    />
  </div>
  )
}

export default Date_picker