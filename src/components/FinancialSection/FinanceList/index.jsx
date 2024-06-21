import { FinanceCard } from "./FinanceCard";
import styles from "./style.module.scss";

export const FinanceList = ({ listItem, setListItem }) => {

    const removeCard = (removingId) => {
        setListItem((listItem) => listItem.filter(item => item.id !== removingId))
    }


    return (
        <div className={styles.list}>
            <h3 className="title">Resumo financeiro</h3>
            {listItem.length === 0 ? <h2 className="title big">Você ainda nao possui nenhum lançamento</h2> :
                <ul className={styles.cardList}>
                    {listItem.map(item => (
                        <FinanceCard removeCard={removeCard} key={listItem.id} item={item} />
                    ))}
                </ul>
            }
        </div>
    )
} 