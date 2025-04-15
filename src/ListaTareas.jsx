import ListaItem from "./ListaItem";

function ListaTareas({todolist, añadidor}){
    return (
        <div id="list">
            {
                todolist.map((_, i) => <ListaItem key={i} i={i} todolist={todolist} añadidor={añadidor}/>)
            }
        </div>
    );
}

export default ListaTareas;