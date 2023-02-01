import NewExpenseForm from "./NewExpenseForm";
import "./AddNewExpenses.css";
import { useState } from "react";

const AddNewExpenses = (props) => {
  const [formIsShown, setFormIsShown] = useState(false);
  const expenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setFormIsShown(false);
  };

  const showFormHandler = () => {
    setFormIsShown(true);
  };
  const addNewExpenseButton = (
    <div className="new-expense__button">
      <button onClick={showFormHandler}>Add New Expense</button>
    </div>
  );

  const stopEditing = () => {
    setFormIsShown(false);
  };

  return (
    <div className="new-expense">
      {!formIsShown && addNewExpenseButton}
      {formIsShown && (
        <NewExpenseForm
          onCancel={stopEditing}
          onSaveExpenseData={expenseDataHandler}
        />
      )}
    </div>
  );
};

export default AddNewExpenses;
