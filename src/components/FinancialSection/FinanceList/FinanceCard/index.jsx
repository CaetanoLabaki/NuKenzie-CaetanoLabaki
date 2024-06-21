import styles from "./style.module.scss";

export const FinanceCard = ({ removeCard, item }) => {    

   
    return(
        <li className={styles.card}>
            <div>
                <h3 className="title">{item.description}</h3>
                <p className="paragraph2 type">{item.type}</p>
            </div>
            <div>
                <p className="paragraph2">R$ {item.amount}</p>
                <button className="btnRemove" onClick={() => removeCard(item.id)}>Excluir</button>
            </div>
        </li>
    )
}

