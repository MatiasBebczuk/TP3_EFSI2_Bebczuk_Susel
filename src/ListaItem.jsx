import { useState } from "react";
import Checkbox from "./Checkbox.jsx"

function ListaItem({i, todolist, añadidor}){
    const item = todolist[i];
    const [checked, setChecked] = useState(item.chequeado);

    return(
        <div className={item.chequeado ? "listaItem tachado" : "listaItem"}>
            <Checkbox checked={checked} setChecked={setChecked} todolist={todolist} añadidor={añadidor} i={i}/>
            <p>{item.tarea} (Creado: {item.timestamp.toDateString()})</p>
        </div>
    )
}

export default ListaItem;