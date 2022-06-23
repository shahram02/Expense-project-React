import { useState } from "react";
import TransActionForm from "../../TransActionForm/TransActionForm";
import styles from "./overView.module.css";
const OverView = ({ expense, income, addTransaction }) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      <div className={styles.navSection}>
        <p className={styles.balanceCounter}>
          میانگین سود یا زیان : $ {income - expense}
        </p>
        <button
          onClick={() => setIsShow((prevState) => !prevState)}
          className={`${styles.btnAdd} ${isShow&&styles.btnRemove}`}
        >
          {!isShow ? "اضافه کردن" : "برگشت"}
        </button>
      </div>

      {isShow && <TransActionForm addTransaction={addTransaction} setIsShow={setIsShow} />}

      <div className={styles.containerBox}>
        <div className={`${styles.box}`}>
          <h6 className={styles.headBox}>مخارج</h6>
          <span className={`${styles.spanBox} ${styles.ExpenseCount}`}>
            ${expense}
          </span>
        </div>
        <div className={`${styles.box}`}>
          <h6 className={styles.headBox}>درآمد</h6>
          <span className={`${styles.spanBox} ${styles.IncomeCount}`}>
            ${income}
          </span>
        </div>
      </div>
    </>
  );
};

export default OverView;
