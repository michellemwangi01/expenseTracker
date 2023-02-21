import React  from 'react'
import '../Components/Styles/expenseForm.css'
import { useState } from 'react'

const Expenseform = (props) => {
  const [entereditemType, setItemType] = useState("Rent")
  const [entereditem, setItem] = useState("")
  const [entereddescription, setDescription] = useState("")
  const [enteredamount, setAmount] = useState("")
  const [entereddate, setDate] = useState("")

  const typeChangeHandler = (e) => {
    setItemType(e.target.value)
  }

  const itemChangeHandler = (e) => {
    setItem(e.target.value)
  }
  
  const descriptionChangeHandler = (e) => {
    setDescription(e.target.value)
  }

  const amountChangeHandler = (e) => {
    setAmount(e.target.value)
  }

  const dateChangeHandler = (e) => {
    setDate(e.target.value)
  }

  const onSubmitHandler = (e) => {
    e.preventDefault()

    const expenseItem = {
      expenseItem: entereditem,
      expenseDescription: entereddescription,
      expenseAmount: +enteredamount,
      expenseDate: new Date(entereddate),
      expenseType: entereditemType
      
    }

    props.onNewItem(expenseItem)
        setAmount('')
        setItem('')
        setDescription('')
        setDate('')
        setItemType()
    
  }
   

  return (
    <>
      <div id='expenseFormContainer'>
      
          <h3>Enter New Expense</h3>
        <form class="form" onSubmit={onSubmitHandler}>
      {/*-------------------Expense Type------------------------------*/}
              <div class="form-group">
              <label for='ExpenseType'>Select expense type</label>
                <select onChange={typeChangeHandler} class="form-control" id="exampleFormControlSelect1">
                  <option value={'Rent'}>Rent</option>
                  <option value={'Utilities'}>Utilities</option>
                  <option value={'Food'}>Food</option>
                  <option value={'Savings'}>Savings</option>
                  <option value={'Donations'}>Donations</option>
                </select>
        </div>
        {/*-------------------Expense Item------------------------------*/}
        <div class="form-group">
          <input 
          type="text" 
          class="form-control" 
          id="ExpenseItem" 
          placeholder="Enter expense item"
          value={entereditem}
          onChange={itemChangeHandler}
          />
        </div>
        {/*-------------------Decription------------------------------*/}
        <div class="form-group">
          <textarea 
          class="form-control" 
          id="exampleFormControlTextarea1" 
          rows="3" 
          placeholder='Expense Description'
          value={entereddescription}
          onChange={descriptionChangeHandler}
          >

          </textarea>
        </div>
        
        {/*-------------------Amount------------------------------*/}
        <div class="form-group input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">Amount (Ksh)</span>
            </div>
            <input type="number" 
            class="form-control" 
            aria-label="Amount (to the nearest dollar)"
            value={enteredamount}
            onChange={amountChangeHandler}
            />
            <div class="input-group-append">
              <span class="input-group-text">.00</span>
        </div>
      </div>
      {/*-------------------Date------------------------------*/}
      <div class="form-group input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">Date</span>
            </div>
            <input 
            type="date" 
            class="form-control" 
            aria-label="Amount (to the nearest dollar)"
            value={entereddate}
            onChange={dateChangeHandler}
            />
      </div>
      {/*-------------------attachment------------------------------*/}
      <div class="form-group">
          
          <button
          id="form-button" 
          type="submit" 
          class="btn btn-primary">Add Expense</button>
        </div>
      </form>
      
      </div>
    </>
  )
}
export default Expenseform
