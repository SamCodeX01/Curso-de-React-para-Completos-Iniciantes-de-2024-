import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";
import { v4 } from "uuid";

function App(){
  const[tasks, setTasks] = useState([{//tasks é o nome da variavel que guarda o estado, setTasks é a função que atualiza o estado
    id: 1,
    title: "Estudar programação",
    description: "Estudar programação para se tornar um desenvolvedor full stack.",
    isCompleted: false
  },
  {  
    id: 2,
    title: "Estudar Inglês",
    description: "Estudar inglês para se tornar fluente.",
    isCompleted: false
  },
  {  
    id: 3,
    title: "Estudar matemática",
    description: "Estudar matemática para se tornar um desenvolvwedor full stack.",
    isCompleted: false
  }])

  function onTaskClick(taskId){
    const newTasks = tasks.map((task) =>{//map percorre o array tasks e retorna um novo array com as tarefas atualizadas
      if(task.id === taskId){
        return{...task, isCompleted: !task.isCompleted};
      }
      return task;
    });
    setTasks(newTasks);
  }

function onDeleteTaskClick(taskId){
  const newTasks = tasks.filter(task => task.id !== taskId)
  setTasks(newTasks)
}

function onAddTaskSubmit(title, description){
  const newTask = {//cria um novo objeto de tarefa
    id: v4(),//gera um id único para a tarefa usando a biblioteca uuid
    //v4() é uma função da biblioteca uuid que gera um id único aleatório
    title: title, //recebe o título da tarefa como parâmetro
    description: description,//recebe a descrição da tarefa como parâmetro
    isCompleted: false,
  }
  setTasks([...tasks, newTask])//atualiza o estado tasks com o novo array que contém as tarefas antigas e a nova tarefa adicionada
}

  return(
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">Gerenciador de Tarefas</h1>
        {<AddTask onAddTaskSubmit = {onAddTaskSubmit}/>/*componente AddTask.jsx que recebe a função onAddTaskSubmit como props */}
        <Tasks tasks = {tasks} onTaskClick={onTaskClick} onDeleteTaskClick={onDeleteTaskClick}/>
        {/*
        Tasks = componente
        tasks = nome dado para a props do outro componente Tasks.jsx que ira receber tudo empacotado
        {tasks} = nome da variavel do useSate, criada la em cima        
        */}
      </div>
    </div>
  )
}
export default App;



//PAREI EM 1h:20min
//https://www.youtube.com/watch?v=2RWsLmu8yVc&t=3686s


