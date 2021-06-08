import React from "react"

export default function YearField(props) {
    // const { date, onChange, start, end } = props
    // const years = Array.from({ length: end - start + 1 }).map(
    //   (_, index) => index + start
    // )
    // const handleChange = (event) => {
    //   const newDate = new Date(date.getTime())
    //   newDate.setYear(parseInt(event.target.value), 1)
    //   onChange(newDate)
    // }

    return (
        <>
      {props.children}
    </>
      )
}