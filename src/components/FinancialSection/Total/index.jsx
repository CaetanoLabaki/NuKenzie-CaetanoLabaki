import styles from "./style.module.scss";


export const Total = ({ total }) => {    
    return(
        <div className={styles.total}>
            <h3 className="title">Valo total:</h3>
            <h3 className="title pink">R$ {total.toFixed(2)}</h3>                   
        </div>
    )
}
