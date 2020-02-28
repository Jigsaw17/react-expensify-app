import React from 'react';
import ExpenseList from './ExpenseList'
import ExpsenListFilters from './ExpenseListFilters';


const ExpenseDashboardPage = () => (
  <div>
    <ExpsenListFilters />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;
