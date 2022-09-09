import React from 'react'
import './widget.css'
import Chart from "../charts/charts"

const Widget = ({icon, title, amount}) => {
    return (
        <div className= "widget">
            <div className="left">
                <span className='title'></span>
               {icon}
               <span className='title'>{title}</span>
               <span className='title'>{amount}</span>

            </div>
            <div className="right">

                
                {/* <Chart /> */}
            </div>
            </div>
        

    )
}
  

 
     export default Widget;