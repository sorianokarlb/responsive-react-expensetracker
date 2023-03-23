import './ExpensesList.css'
import ExpenseItem from './ExpenseItem';

const ExpensesList = (props) => {


    if (props.items.length === 0){
        return <h2 className='expenses-list__fallback'>No expenses found!</h2>
    }

    return <ul className='expenses-list'>
        {props.items.map(i => 
                     <ExpenseItem 
                    key={i.id}
                    title={i.title} 
                    amount={i.amount} 
                    date={i.date}
                    />
                )}
    </ul>
}

export default ExpensesList