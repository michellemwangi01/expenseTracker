import React from 'react'

const ExpenseDate = (props) => {
    const month = props.date.toLocaleString('en-US', {month: 'short'});
    const year = props.date.toLocaleString('en-US', {year: 'numeric'});
    const day = props.date.toLocaleString('en-US', {day: '2-digit'});
    const weekday = props.date.toLocaleString('en-US', {weekday: 'short'});


  
  return (
    <>
    <div> {weekday} {day} {month} {year}   </div>
    </>
  )
}

export default ExpenseDate;
