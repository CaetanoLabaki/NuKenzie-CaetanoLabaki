import styles from "./style.module.scss";

export const TypeValueInput = ({ type, setType }) => {    

    return (
        <div className={styles.select}>
            <label className="label" htmlFor="options">Tipo de valor</label>
            <select className="select" id="options" value={type} onChange={(e) => setType(e.target.value)}>
                <option value="Entrada">Entrada</option>
                <option value="Despesa">Despesa</option>
            </select>
        </div>

    )
}