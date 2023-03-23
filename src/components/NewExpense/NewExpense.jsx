import { useState } from 'react';
import './NewExpense.css'
import NewExpenseForm from './NewExpenseForm';

const NewExpense = (props) => {
    const [showForm,setShowForm] = useState(false)


    const handleSaveExpense = (enteredExpense) => {
        const expenseData = {
            ...enteredExpense,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
        setShowForm(false);
    }

    const handleShowForm = () => {
        setShowForm(true)
    }

    const handleCancel = () => {
        setShowForm(false)
    }

    return (
        <>
            <div className='new-expense'>
               {!showForm && <button onClick={handleShowForm}>Add New Expense</button>}
                {showForm && <NewExpenseForm onSaveExpense={handleSaveExpense} onCancel={handleCancel} />}
            </div>
        </>
    )
}

export default NewExpense;