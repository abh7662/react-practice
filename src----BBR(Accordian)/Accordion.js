import React, { Fragment,useState } from "react"

function Accordion({ data,position,disabled }) {
    const [activeIndex, setActiveIndex] = useState(0)
    
    return (
      <div data-accordion>
        {data.map((tab, index) => {
          const isActive = index === activeIndex
          const isDisabled = disabled.includes(index)
        //   const myClass = isActive ? 'expanded' : '' + isDisabled ? 'disabled' : ''
          const title = (<div
            data-panel-title
            className={`${isDisabled?'disabled':isActive?'expanded':''}`}
            // className={isDisabled ? 'disabled': ''}
            onClick={() => !isDisabled && setActiveIndex(index)}
          >
            <span>{tab.label}</span>
            <span>{tab.icon}</span>
          </div>)
        const content = (
            <div data-panel-content 

                className={isActive ? 'expanded' : ''}
                // className={isDisabled ? 'disabled': ''}
            >
                    {tab.content}
                  </div>
        )
        // console.log(title)
          return (
            <Fragment key={index}>
              {position === "top"?[content,title]:[title,content]}
            </Fragment>
          )
        })}
      </div>
    )
  }

  export default Accordion