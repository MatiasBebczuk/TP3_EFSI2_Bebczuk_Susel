function IngresarTarea({todolist, añadidor}){
    const añadirItem = () => {
        const input = document.querySelector("#item");
        const item = input.value;
        input.value = "";
    
        if(!item || !item.match(/[^\W]/)) return; // no añadir items vacíos, amamos regex
        añadidor(todolist.concat({
            tarea: item,
            timestamp: new Date(),
            timestampChequeado: null,
            chequeado: false,
        }));
    }

    return (
        <div className="ingresoTarea">
          <input type="text" id="item" className="form-control" placeholder="Item" />
          <button className="btn btn-primary" onClick={añadirItem}>Añadir item</button>
        </div>
    );
}

export default IngresarTarea;