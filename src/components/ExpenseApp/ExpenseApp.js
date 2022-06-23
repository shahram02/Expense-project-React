import { useState } from "react";
import styles from "./expenseApp.module.css";
import OverView from "./OverView/Overview";
import TransAction from "./TransAction/TransActionCom";

const ExpenseApp = () => {
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);
  const [transActions, setTransActions] = useState([]);

  return (
    <section className={styles.container}>
        <OverView expense={expense} income={income}/>
        <TransAction/>
    </section>
  );
};

export default ExpenseApp;
