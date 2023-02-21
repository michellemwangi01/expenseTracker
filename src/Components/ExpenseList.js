import React from 'react'
import ExpenseDate from '../Components/ExpenseDate'
import '../Components/Styles/expenseList.css'

export default function ExpenseList(props) {
  console.log(props.data)
  const expenseList = props.data.map((expenseItem) => (
    <table class="table table-hover" >
  <tbody>
  <tr key={expenseItem.id}>
  <td scope="col">  {expenseItem.expenseType}</td>
    <td scope="col">  {expenseItem.expenseItem}</td>
    <td scope="col"> {expenseItem.expenseDescription}</td> 
    <td scope="col"> Ksh {expenseItem.expenseAmount}.00</td>
    <td scope="col"> <ExpenseDate date = {expenseItem.expenseDate}/></td>
  </tr>
  </tbody>
</table>
    

    ))
   
  return (
    <>
    <div id='ExpenseListContainer'>
      <div id='ExpenseHeaderContainer'>
      <h5 style={
        {color: 'white', 
        textAlign:'center', 
        textDecoration:'underline', 
        paddingtop: '20px',
        marginTop: '20px'
    
        
        
        }}>MY EXPENSE LIST</h5>
      </div>
      <div id='ExpenseListItems' >
        {expenseList}
      </div>
    </div>
    </>
  );
}
