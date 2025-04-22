import Checkbox from "./Checkbox.jsx"

function ListaItem({i, todolist, añadidor}){
    const setChecked = () => {
        let aux = [...todolist];
        aux[i].chequeado = !aux[i].chequeado;
        aux[i].timestampChequeado = aux[i].chequeado ? new Date() : null;
        añadidor(aux);
    };

    return(
        <div className={todolist[i].chequeado ? "listaItem tachado" : "listaItem"}>
            <Checkbox ischecked={todolist[i].chequeado} setChecked={setChecked}/>
            <p>{todolist[i].tarea} (Creado: {todolist[i].timestamp.toDateString()})</p>
        </div>
    )
}

export default ListaItem;