function Input(props){
    
    return(      
            <input
            type={props.type} 
            placeholder={props.placeholder} 
            className="border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
            value={props.value} 
            onChange={props.onChange}//controla o valor do input com o estado description
            //  {...props} //espalha as props recebidas pelo componente Input
            />
        )
}
export default Input