import { DescriptionInput } from "./DescriptionInput";
import { ValueInput } from "./ValueInput";
import { TypeValueInput } from "./TypeValueInput";
import { useState } from "react";
import styles from "./style.module.scss";



export const FinanceForm = ({ addItem }) => {
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");
    const [type, setType] = useState("Entrada");
    const [id, setId] = useState(1)

    const submit = (e) => {
        e.preventDefault();

        if (!description || !amount) return;

        const newListItem = {
            id,
            description,
            amount,
            type
        };

        addItem(newListItem);
        setDescription("");
        setAmount("");
        setId(id + 1);
    };

    return (
        <form onSubmit={submit}>
            <div className={styles.formBox}>
                <DescriptionInput description={description} setDescription={setDescription} />
                <ValueInput amount={amount} setAmount={setAmount} />
                <TypeValueInput type={type} setType={setType} />
                <button className="btnPink" type="submit">Inserir valor</button>
            </div>
        </form>
    )
}