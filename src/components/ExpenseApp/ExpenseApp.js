import { useEffect, useState } from "react";
import styles from "./expenseApp.module.css";
import OverView from "./OverView/Overview";
import TransAction from "./TransAction/TransActionCom";

const ExpenseApp = () => {
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);
  const [transActions, setTransActions] = useState([]);

  const addTransaction = (formValues) => {
    console.log(formValues);
    setTransActions([...transActions, { ...formValues, id: Date.now() }]);
  };

  useEffect(() => {
    let exp = 0;
    let inc = 0;
    transActions.forEach((t) => {
      t.type === "expensev"
        ? (exp += parseInt(t.amount))
        : (inc += parseInt(t.amount));
    });
    setExpense(exp);
    setIncome(inc);
  }, [transActions]);

  return (
    <section className={styles.container}>
      <OverView
        expense={expense}
        income={income}
        addTransaction={addTransaction}
      />
      <TransAction transActions={transActions}  />
    </section>
  );
};

export default ExpenseApp;
