import { useState } from "react";

function TareaRapida({todolist}){
    const [tareaRapidaTexto, setTareaRapidaTexto] = useState("");
    const mostrarTareaRapida = () => {
        let tareasCompletadas = todolist.filter(item => item.chequeado);
        if(tareasCompletadas.length == 0){
            setTareaRapidaTexto("Aún no hay ninguna tarea resuelta");
            return;
        }
    
        let minTarea = "";
        let minTiempo = Number.MAX_VALUE;
    
        for(let i = 0; i < tareasCompletadas.length; i++){
            if(tareasCompletadas[i].timestampChequeado - tareasCompletadas[i].timestamp < minTiempo){
                minTiempo = tareasCompletadas[i].timestampChequeado - tareasCompletadas[i].timestamp;
                minTarea = tareasCompletadas[i].tarea;
            }
        }
    
        setTareaRapidaTexto(`La tarea que más rápido se ha concretado fue: ${minTarea}`);
    }

    return (
        <>
            <button className="btn btn-primary" onClick={mostrarTareaRapida}>Tarea más rápida</button>
            <p id="tarearapida">{tareaRapidaTexto}</p>
        </>
    );
}

export default TareaRapida;