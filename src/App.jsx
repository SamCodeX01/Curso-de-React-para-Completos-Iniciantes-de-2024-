import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";

function App(){
  const[tasks, setTasks] = useState([{
    id: 1,
    tittle: "Estudar programação",
    description: "Estudar programação para se tornar um desenvolvedor full stack.",
    isCompleted: false
  },
  {  
    id: 2,
    tittle: "Estudar Inglês",
    description: "Estudar inglês para se tornar fluente.",
    isCompleted: false
  },
  {  
    id: 3,
    tittle: "Estudar matemática",
    description: "Estudar matemática para se tornar um desenvolvwedor full stack.",
    isCompleted: false
  }])

  return(
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">Gerenciador de Tarefas</h1>
        <AddTask/>
        <Tasks tasks = {tasks}/>
      </div>
    </div>
  )
}
export default App;
