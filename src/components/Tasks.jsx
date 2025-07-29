import { CheckIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
 // Importing the icon for navigation
/*
props é um objeto que contém todos os dados passados do componente pai.
O nome props é UMA convenção, mas você poderia chamar de qualquer coisa (ex: function Tasks(dados) { ... }).
*/
function Tasks({tasks, onTaskClick, onDeleteTaskClick}){//Aqui esse componente filho Tasks.jsx, esta recebendo dados do componente pai App.jsx através do props
    const navigate = useNavigate();

    function onSeeDetailsClick(task){
        const query = new URLSearchParams(); //Cria um novo objeto URLSearchParams para manipular os parâmetros de consulta da URL
        query.set("title", task.title); //Adiciona o título da tarefa como um parâmetro de consulta
        query.set("description", task.description); //Adiciona a descrição da tarefa como um parâmetro de consulta
        navigate(`/task?${query.toString()}`);//Navega para a página de detalhes da tarefa com os parâmetros de consulta
        //navigate é uma função do react-router-dom que permite navegar para outra rota
    }

    return(     
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
            {tasks.map((task)=>(
               <li key={task.id} className="flex gap-2">

                    <button onClick={()=> onTaskClick(task.id)} 
                    className={`bg-slate-400 text-left w-full flex items-center gap-2 text-white p-2 rounded-md 
                        ${task.isCompleted && 'line-through'}`}
                    >
                        {task.isCompleted ? <CheckIcon/> : null}
                        {task.title}
                        {/* {task.isCompleted?"COMPLETE":"INCOMPLETE"} */}
                    </button>

                <button onClick={()=> onSeeDetailsClick(task)} 
                className="bg-slate-400 p-2 rounded-md text-white">
                    {/* <ChevronRightIcon/> */}
                    Ver Detalhes
                    {/* <TrashIcon /> */}                    
                </button >

                    <button onClick={() => onDeleteTaskClick(task.id)} 
                    className="bg-slate-400 p-2 rounded-md text-white">
                        Lixo
                    </button>
               </li>     
            ))}
        </ul>    
    )
}
export default Tasks;
