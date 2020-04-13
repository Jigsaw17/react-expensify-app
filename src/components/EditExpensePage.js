import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm'
import { startEditExpense, startRemoveExpense } from '../actions/expenses'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'




export class EditExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  };
  onRemove = () => {
    this.props.startRemoveExpense({ id: this.props.expense.id });
    this.props.history.push('/');
  };
render() {
  return (
      <div>
       <div className="content-container">
        <h1>Edit Expense</h1>
      <ExpenseForm 
        expense={this.props.expense}
        onSubmit={this.onSubmit}
      />
          <button className="delete_button" onClick={this.onRemove}><FontAwesomeIcon icon={faTrash} color="white" size="2x"/></button>
      </div>
    </div>
   );
  };
};



const mapStateToProps = (state, props) =>  ({
    expense: state.expenses.find((expense) => expense.id === props.match.params.id )
  });

const mapDispatchToProps = (dispatch, props) => ({
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
    startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
});


export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
