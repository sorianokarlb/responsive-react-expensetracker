import Card from "../UI/Card"
import './Expenses.css'
import ExpensesFilter from "./ExpensesFilter"
import { useState } from "react"
import ExpensesList from "./ExpensesList"
import ExpensesChart from "./ExpensesChart"

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState("2020")
    const handleExpenseFilter = (selectedYear) => {
        
        setFilteredYear(selectedYear)
        console.log(selectedYear)
    }

    const filteredExpense = props.expenses.filter(i => {
        return i.date.getFullYear().toString() == filteredYear;
    })


    return (
        <>
            <Card className="expenses">
                <ExpensesFilter selectedYear={filteredYear} onSelectedYear={handleExpenseFilter}/>
            <ExpensesChart expenses={filteredExpense}/>
            <ExpensesList items={filteredExpense}/>

            </Card>
        </>
    )
}

export default Expenses