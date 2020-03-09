import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expensesTotal';
import numeral from 'numeral';



export const ExpenseSummary = ({expenseCount, expensesTotal}) => {
    const formatExpenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    const formatexpensesTotal = numeral(expensesTotal).format('0,0');
    return (
      <div>
        <h1>Viewing {expenseCount} {formatExpenseWord} totalling {formatexpensesTotal}</h1>
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
