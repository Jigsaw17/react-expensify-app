import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';


test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual([])
})

test('should remove expense by id', () => {
    const action = {
        type:'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([ expenses[0], expenses[2] ])
})


test('should remove expense if id not found', () => {
    const action = {
        type:'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

test('should add an expense', () => {
  const expense = {
    id: '105',
    description: 'Laptop',
    note: '',
    amount: 55000,
    createdAt: 1200   
  };
  const action = {
      type: 'ADD_EXPENSE',
      expense
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense])

})

test('should edit an expense', () => {
    const note = 'Note One'
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates: {
            note
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state[0].note).toBe(note)
})
   

test('should not edit expense if expense not found', () => {
    const note = 'Note One'
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            note
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses)
})

