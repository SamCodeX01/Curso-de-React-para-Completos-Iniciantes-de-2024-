
/*
props é um objeto que contém todos os dados passados do componente pai.
O nome props é UMA convenção, mas você poderia chamar de qualquer coisa (ex: function Tasks(dados) { ... }).
*/
function Tasks(props){//Aqui esse componente filho Tasks.jsx, esta recebendo dados do componente pai App.jsx através do props
   
    return(     
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
            {props.tasks.map((task)=>(
               <li key={task.id} className="flex gap-2">
                    <button onClick={()=> props.onTaskClick(task.id)} 
                    className={`bg-slate-400 text-left w-full text-white p-2 rounded-md 
                        ${task.isCompleted && 'line-through'}`}
                    >
                        {task.title}
                        {/* {task.isCompleted?"COMPLETE":"INCOMPLETE"} */}
                    </button>
                <button className="bg-slate-400 p-2 rounded-md text-white">
                    {/* <ChevronRightIcon/> */}
                    Ver Detalhes
                    {/* <TrashIcon /> */}                    
                </button >
                    <button onClick={() => props.onDeleteTaskClick(task.id)} className="bg-slate-400 p-2 rounded-md text-white">Lixo</button>
               </li>     
            ))}
        </ul>    
    )
}
export default Tasks;


//PAREI NO MINUTO 1:00

//https://www.youtube.com/watch?v=2RWsLmu8yVc&t=984s