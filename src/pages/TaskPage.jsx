import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../components/Title"; // Importa o componente Title para o título da página

function TaskPage(){
    const navigate = useNavigate();
        const [searchParams] = useSearchParams();
        const title = searchParams.get("title");
        const description = searchParams.get("description");
    
    return (
        <div className="h-screen bg-slate-500 p-6">
            <div className="w-[500px] mx-auto space-y-4">
                <div className="flex justify-center relative mb-6 h-10 rounded-sm">
                   
                    <button onClick={()=>navigate(-1)} className="absolute left-0 top-0 bottom-0 rounded-md">
                        Voltar
                    </button>
                    <Title>Detalhes da Tarefa</Title>
                    
                </div>

                 <div className="bg-slate-200 p-4 rounded-md">
                    <h2 className ="text-xl font-bold text-slate-600">{title}</h2>
                    <p className="text-slate-600">{description}</p>         
                 </div>    
            </div>
        </div> 
    )   
}
export default TaskPage;