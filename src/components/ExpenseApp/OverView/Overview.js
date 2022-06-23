import styles from "./overView.module.css"
const OverView = ({expense,income}) => {
  return (
    <>
      <div className={styles.navSection}>
        <p className={styles.balanceCounter}>
          میانگین سود یا زیان : $ {income - expense}
        </p>
        <button className={styles.btnAdd}>اضافه کردن</button>
      </div>
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
