import React, { useState } from "react"

const DateFieldsContext = React.createContext()

function DateFieldsContextProvider(props){
  const [startDate, setStartDate] = useState(new Date('May 28, 2020'))
//   console.log(startDate)
    return (
        <DateFieldsContext.Provider value={{date:startDate, onChange:setStartDate, start:2010, end:2020}}>
            {props.children}
        </DateFieldsContext.Provider>
    )
}

export {DateFieldsContextProvider,DateFieldsContext}