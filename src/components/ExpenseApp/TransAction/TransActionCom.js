import { useEffect, useState } from "react";
import styles from "./transActionCom.module.css";
const TransAction = ({ transActions }) => {
  const [searchItem, setSearchItem] = useState("");
  const [filteredTnx, setFilteredTnx] = useState(transActions);

  const filterTnx = (search) => {
    if (!search || search === "") {
      setFilteredTnx(transActions);
      return;
    }
    const newFiltered = transActions.filter((t) =>
      t.desc.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredTnx(newFiltered);
  };

  const changeHandler = (e) => {
    setSearchItem(e.target.value);
    filterTnx(e.target.value);
    console.log(searchItem);
  };

  useEffect(() => {
    filterTnx(searchItem);
  }, [transActions]);

  if (!transActions.length) {
      return <h2 className={styles.startTransAction}>درآمدتو مدیریت کن</h2>
  }
  return (
    <section>
      <input
        className={`${styles.input}`}
        type="text"
        value={searchItem}
        onChange={changeHandler}
        placeholder="جست و جو بین مقدار های ذخیره شده"
      />
      {filteredTnx.length ? (
        filteredTnx.map((t) => {
          return (
            <div
              key={t.id}
              className={`${styles.transAction} ${
                t.type === "income" ? styles.greenRadiu : styles.redRadiu
              }`}
            >
              <span>
                <div>{t.desc}</div>
              </span>
              <span>
                <div>$ {t.amount}</div>
              </span>
            </div>
          );
        })
      ) : (
        <p className={styles.tagNoting}>این هزینه دخیره نشده است</p>
      )}
    </section>
  );
};

export default TransAction;
