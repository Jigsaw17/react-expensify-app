import React from 'react';
import ExpenseList from './ExpenseList'
import ExpsenListFilters from './ExpenseListFilters';
import ExpenseSummary from './ExpenseSummary';
import Menu from './Menu';




const ExpenseDashboardPage = () => (
  <div>
    <ExpenseSummary />
    <ExpsenListFilters />
    <ExpenseList />
    </div>
);

export default ExpenseDashboardPage;
