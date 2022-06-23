import { useState } from "react";
import styles from "./transActionForm.module.css";
const TransActionForm = ({ addTransaction, setIsShow }) => {
  const [formValues, setFormValues] = useState({
    type: "expensev",
    amount: 0,
    desc: "",
  });

  const changeHandler = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    addTransaction(formValues);
    setIsShow(false);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="number"
        name="amount"
        placeholder="مقدار درآمد"
        onChange={changeHandler}
        value={formValues.amount}
      />
      <input
        type="text"
        name="desc"
        placeholder="توضیحات"
        onChange={changeHandler}
        value={formValues.desc}
      />
      <div className={styles.boxRadio}>
        <label name="expensev">مخارج</label>
        <input
          type="radio"
          name="type"
          value="expensev"
          onChange={changeHandler}
          checked={formValues.type === "expensev"}
        />
        <label name="income">درآمد</label>
        <input
          type="radio"
          name="type"
          value="income"
          onChange={changeHandler}
          checked={formValues.type === "income"}
        />
      </div>
      <button type="submit" className={styles.btnAdd}>
        اضافه کردن گزارش
      </button>
    </form>
  );
};

export default TransActionForm;
