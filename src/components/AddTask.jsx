import { useState } from "react";
import Input from "./Input"; // Importa o componente Input para os campos de entrada

    function AddTask({onAddTaskSubmit}){
        const [title, setTitle] = useState("");
        const [description, setDescription] = useState("");
    return(
        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col gap-2">
           
           <Input
             type="text" 
             placeholder="Digite o título da tarefa"  
             value={title} 
             onChange={(e) => setTitle(e.target.value)}//controla o valor do input com o estado title
            />

            <Input
                type="text" 
                placeholder="Digite a descrição da tarefa" 
                value={description} 
                onChange={(e) => setDescription(e.target.value)}//controla o valor do input com o estado description
            />

            <button
             onClick={() => {
                if(!title.trim() || !description.trim()){//verifica se os campos estão preenchidos
                    alert("Por favor, preencha todos os campos.");
                    return;
                }
                onAddTaskSubmit(title, description);//chama a função onAddTaskSubmit passando os valores dos inputs
                setTitle(""); //limpa o input de título após adicionar a tarefa
                setDescription(""); //limpa o input de descrição após adicionar a tarefa
             }} 
             className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
             >
                Adicionar
            </button>
        </div>
        )
    }
    export default AddTask;