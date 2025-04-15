import { useEffect } from "react";

function Checkbox({checked, setChecked, todolist, añadidor, i}){
    useEffect(() => {
        todolist[i].chequeado = checked;
        todolist[i].timestampChequeado = checked ? new Date() : null;
        añadidor(todolist);
    });

    return (
        <input
            type="checkbox"
            id={"check" + Math.random()}
            className="form-check-input" onChange={() => setChecked(!checked)}
            checked={checked}
        />
    );
}

export default Checkbox;