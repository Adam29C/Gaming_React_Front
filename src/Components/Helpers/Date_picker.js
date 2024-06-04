import React from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Date_picker = ({selectDate,setSelectDate}) => {
  return (
    <div className="d-flex">
    <h6 className="m-2">Select a date:</h6>
    <DatePicker
      selected={selectDate}
      onChange={(e) => setSelectDate(e)}
      maxDate={new Date()}
      className="custom-datepicker"
    />
  </div>
  )
}

export default Date_picker