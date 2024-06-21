import { useState } from "react";
import { FinanceForm } from "./FinanceForm"
import { FinanceList } from "./FinanceList"
import { Total } from "./Total";
import styles from "./style.module.scss";


export const FinanceSection = () => {

    const financelistData = [];

    const [listItem, setListItem] = useState(financelistData);

    const addItem = (newList) => {
        setListItem((listItem) => [...listItem, newList])
    };

    console.log(listItem)

    const calculeTotal = () => {
        return listItem.reduce((total, listItem) => {
            return listItem.type === "Entrada"
                ? total + parseFloat(listItem.amount)
                : total - parseFloat(listItem.amount);
        }, 0);
    }

    console.log(calculeTotal());

    return (
        <section>
            <div className="container">
                <div className={styles.flexBox}>
                    <div className={styles.formTotal}>
                        <FinanceForm addItem={addItem} />
                        <Total total={calculeTotal()} />
                    </div>
                    <FinanceList listItem={listItem} setListItem={setListItem} />
                </div>
            </div>
        </section>
    )
}