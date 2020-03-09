import React from 'react';
import ExpenseList from './ExpenseList'
import ExpsenListFilters from './ExpenseListFilters';
import ExpenseSummary from './ExpenseSummary';


const ExpenseDashboardPage = () => (
  <div>
    <ExpenseSummary />
    <ExpsenListFilters />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;
