
import React from 'react';
import './App.css';
import Expenseform from './Components/Expenseform';
import Header from './Components/Header';
import { useState } from 'react';
import ExpenseList from './Components/ExpenseList';




const initial_expense_list = [
  {
    id: 1,
    expenseType: 'Rent',
    expenseItem: 'Transport',
    expenseDescription: 'Transport to and from work',
    expenseAmount: 650.00,
    expenseDate: new Date(2022,3,2)
  },
  {
    id: 2,
    expenseType: 'Rent',
    expenseItem: 'Rent',
    expenseDescription: `Rent because I'm a big girl and I live by myself`,
    expenseAmount: 670.00,
    expenseDate: new Date(2022,3,5)
  },
  {
    id: 3,
    expenseType: 'Utilities',
    expenseItem: 'Electricity',
    expenseDescription: 'Because what is humanity without elec',
    expenseAmount: 470.00,
    expenseDate: new Date(2023, 9, 1)
  },
  {
    id: 4,
    expenseType: 'Food',
    expenseItem: 'Food',
    expenseDescription: 'Food is bae so issamust',
    expenseAmount: 980.00,
    expenseDate: new Date(2023, 9, 2)
  },
  {
    id: 5,
    expenseType: 'Donations',
    expenseItem: 'Lingerie',
    expenseDescription: 'Clothing is important. Lingerie is importanter',
    expenseAmount: 400.00,
    expenseDate: new Date(2023, 9, 1)
  },
  {
    id: 6,
    expenseType: 'Savings',
    expenseItem: 'Cologne',
    expenseDescription: 'You just gots to smell good',
    expenseAmount: 900.00,
    expenseDate: new Date(2023,9, 1)
  }

 

]







function App() {

  const [expenses, setExpenses] = useState(initial_expense_list);
  const expenseHandler = (expense) => {
    setExpenses(() => {
      
      return [expense, ...expenses];
    })
  }
  return (
   <>
   <div id='expenseTrackerBody'>
   <Header/>
   <Expenseform onNewItem={expenseHandler}/>
   <ExpenseList data = {expenses}/>
   </div>
  
   
   </>
  );
}

export default App
