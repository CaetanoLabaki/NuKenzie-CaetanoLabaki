import styles from "./style.module.scss"

export const DescriptionInput = ({ description, setDescription }) => {  

    return(
        <div className={styles.description}>
            <label className="label">Descrição</label>
            <input className="input1" type="text" placeholder="Digite aqui sua descrição" value={description} onChange={(e) => setDescription(e.target.value)} required/>
        </div>        
    )
}