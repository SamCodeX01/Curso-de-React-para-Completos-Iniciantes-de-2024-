import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";
import { v4 } from "uuid";
import { useEffect } from "react";
import Title from "./components/Title"; // Importa o componente Title para o título da página

function App(){
  const[tasks, setTasks] = useState(//tasks é o nome da variavel que guarda o estado, setTasks é a função que atualiza o estado
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(()=>{//useEffect é um hook do React que permite executar efeitos colaterais em componentes funcionais
      localStorage.setItem("tasks", JSON.stringify(tasks));// Armazena as tarefas no localStorage como uma string JSON
    },[tasks]);// O efeito será executado sempre que o estado tasks for atualizado

    useEffect(()=>{
      const fetchTasks = async () => {
        //Chamar API
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos?_limit=5",{method:"GET",}
        );
       
        const data = await response.json();//PEGA OS DADOS QUE ELA RETORNA, Converte a resposta da API em JSON

        setTasks(data)//ARMAZENA/PERSISTIR ESSES DADOS NO STATE

      };
      //Se quiser, você pode chamar uma API para pegar as tarefas
      fetchTasks();//Chama a função fetchTasks para buscar as tarefas da API
    },[]);//useEffect vazio para executar apenas uma vez quando o componente for montado


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
        <Title>Gerenciador de Tarefas</Title>
        <h1 className="text-white text-center">Aline do Grau</h1>
        {<AddTask onAddTaskSubmit = {onAddTaskSubmit}/>/*componente AddTask.jsx que recebe a função onAddTaskSubmit como props */}
        <Tasks tasks = {tasks} onTaskClick={onTaskClick} onDeleteTaskClick={onDeleteTaskClick}/>
        {/*
        Tasks = componente
        tasks = nome dado para a props do outro componente Tasks.jsx que ira receber tudo empacotado
        {tasks} = nome da variavel do useSate, criada la em cima        
        */}
      </div>
    </div>
  );
}
export default App;

