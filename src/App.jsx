import { useState } from 'react';
import './App.css'
import IngresarTarea from "./IngresarTarea.jsx"
import ListaTareas from "./ListaTareas.jsx"
import TareaRapida from './TareaRapida.jsx';

function App() {
  const [toDo, setToDo] = useState([]);

  return (
    <>
      <ListaTareas todolist={toDo} añadidor={setToDo}/> {/* Existe esa palabra?? */}
      <IngresarTarea todolist={toDo} añadidor={setToDo}/>
      <TareaRapida todolist={toDo}/>
    </>
  )
}

export default App
