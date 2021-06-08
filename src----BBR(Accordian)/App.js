import React from 'react';
import data from "./AccordianData"
import Accordion from "./Accordion"

function App() {
    return (
    <div className="App">
      <Accordion data={data} position="bottom" disabled={[1]} />
    </div>
  )
}
export default App