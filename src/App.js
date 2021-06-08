import React, { useState, createContext, useContext } from 'react';
import { DateFieldsContext } from './DateFieldsContext';
import DayField from "./DayField"
import MonthField from "./MonthField"
import YearField from "./YearField"

// We want to change App to:
// <DateFields value={startDate} onChange={setStartDate}>
//  <MonthField aria-label="Start Month" />
//  <DayField aria-label="Start Day" />
//  <YearField start={2018} end={2019} aria-label="Start year" />
// </DateFields>

// The tasks:
// 1) Edit App to stop rendering the individual components
//    in DateFields and render children instead
// 2) Provide Context in DateFields
// 3) Use the Context in MonthField, DayField, and YearField.

function App() {
  return (
    <div>
      <h1>Dates!</h1>
      <DateFields />
    </div>
  )
}

function DateFields() {
  // console.log(useContext(DateFieldsContext))
  const { date, onChange,start,end } =useContext(DateFieldsContext)
  // {{startDate, onChange:setStartDate, start:2010, end:2020}}>

  const month = date.getMonth()
  const years = Array.from({ length: end - start + 1 }).map(
      (_, index) => index + start
    )
  //   const handleChange = (event) => {
  //     const newDate = new Date(date.getTime())
  //     newDate.setMonth(parseInt(event.target.value))
  //     onChange(newDate)
  //   }
  //   const value1 = date.getDate()
  //   const handleChange1 = (event) => {
  //     const newDate = new Date(date.getTime())
  //     newDate.setDate(parseInt(event.target.value))
  //     onChange(newDate)
  //   }
  return (
    <div className="date-picker">
      <MonthField>
      <select value={month} onChange={(event) => {
        const newDate = new Date(date.getTime())
        newDate.setMonth(parseInt(event.target.value))
        onChange(newDate)
      }}>
        {Array.from({ length: 12 }).map((_, index) => (
          <option key={index} value={index + 1}>
            {index + 1}
          </option>
        ))}
      </select>
      </MonthField>
        -
      <DayField>
      <select value={date.getDate()} onChange={(event) => {
        const newDate = new Date(date.getTime())
        newDate.setDate(parseInt(event.target.value))
        onChange(newDate)
      }}>
        {Array.from({ length: 31 }).map((_, index) => (
          <option key={index} value={index + 1}>
            {index + 1}
          </option>
        ))}
      </select>
      </DayField>
      -
      <YearField>
      <select value={date.getFullYear()} onChange={(event) => {
        const newDate = new Date(date.getTime())
        newDate.setYear(parseInt(event.target.value),1)
        onChange(newDate)
      }}>
          {years.map((year) => (
            <option key={year}>{year}</option>
          ))}
        </select>
      </YearField>

    </div>
  )
}




 
export default App