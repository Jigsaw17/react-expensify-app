import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expensesTotal';
import numeral from 'numeral';



export const ExpenseSummary = ({expenseCount, expensesTotal}) => {
    const formatExpenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    const formatexpensesTotal = numeral(expensesTotal).format('$0,0');
    return (
       <div className="page-header">
        <div className="expense_button">
          <Link id="new_expense" to="/create" >Create Expense</Link>
        </div>
        <div className="content-container">
         <h1 className="page-header__title">Viewing <span className="expenses_summary">{expenseCount}</span> {formatExpenseWord} totalling <span className="expenses_summary">{formatexpensesTotal}</span></h1>  
        </div>
      </div>
    );
}


const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters)
    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses)
   }
}


export default  connect(mapStateToProps)(ExpenseSummary);

