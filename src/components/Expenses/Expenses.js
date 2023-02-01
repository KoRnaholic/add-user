import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter";

const Expenses = (props) => {
  const [year, setYear] = useState("2023");

  const filterChangeHandler = (year) => {
    console.log(year);
    setYear(year);
  };

  const filteredYear = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={year}
          onChangeFilter={filterChangeHandler}
          items={props.items}
        />
        {filteredYear.length === 0 ? (
          <p>No Expenses found!</p>
        ) : (
          filteredYear.map((item) => (
            <ExpenseItem
              title={item.title}
              amount={item.amount}
              date={item.date}
              key={item.id}
            />
          ))
        )}
      </Card>
    </div>
  );
};

export default Expenses;
