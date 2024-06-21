import styles from "./style.module.scss"

export const ValueInput = ({ amount, setAmount }) => {   

    return(
        <div className={styles.amount}>
            <label className="label">Valor (R$)</label>
            <input className="input2" type="number" value={amount}  placeholder="1"  onChange={(e) => setAmount(e.target.value)}/>
        </div>
    )
}