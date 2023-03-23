import './NewExpenseForm.css'
import { useState } from 'react';

const NewExpenseForm = (props) => {
    const [titleChange, setTitleChange] = useState('');
    const [amountChange, setAmountChange] = useState('');
    const [dateChange, setDateChange] = useState('')

       const handleTitle = (e) => {
        setTitleChange(e.target.value)
    }

    const handleAmount = (e) => {
        setAmountChange(e.target.value)
    }

    const handleDate = (e) => {
        setDateChange(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const expenseData = {
            title: titleChange,
            amount: +amountChange,
            date: new Date(dateChange)
        }

        props.onSaveExpense(expenseData);
        setTitleChange('');
        setAmountChange('');
        setDateChange('');
        
    }


    return <form onSubmit={handleSubmit}>

               <div className='new-expense__controls'>

                <div className='new-expense__control'>
                    <label htmlFor="title">Title</label>
                     <input type="text" name="title" onChange={handleTitle} value={titleChange}/>
                </div>

                <div className='new-expense__control'>
                    <label htmlFor="amount">Amount</label>
                     <input type="number" name="amount" min="0.01" step="0.01" onChange={handleAmount} value={amountChange}/>
                </div>

                <div className='new-expense__control'>
                    <label htmlFor="date">Date</label>
                     <input type="date" name="date" min="2023-01-01" step="2024-12-31" onChange={handleDate} value={dateChange}/>
                </div>

               </div>

               <div className='new-expense__actions'>
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type='submit'>Add Expense</button>
               </div>

            </form>
}

export default NewExpenseForm;