import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

function NewExpense(props) {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  //   if (!addingExpense) {
  //     return (
  //       <button onClick={addExpenseButtonHandler}>Add New Expense</button>
  //       //     <button>Add New Expense</button>
  //       //
  //     );
  //   }

  const [isEditing, setIsEditing] = useState(false);

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const cancelEditingHandler = () => {
    console.log("clicked cancel");
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancelEdit={cancelEditingHandler}
        />
      )}
    </div>
  );

  // return (
  //   <div className="new-expense">
  //     {!isEditing && (
  //       <button onClick={startEditingHandler}>Add New Expense</button>
  //     )}
  //     {isEditing && (
  //       <>
  //         <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
  //         <button onClick={cancelEditingHandler}>Cancel</button>
  //       </>
  //     )}
  //   </div>
  // );
}

export default NewExpense;
