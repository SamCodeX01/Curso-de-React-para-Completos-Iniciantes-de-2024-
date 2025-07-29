function Button(props){
    
    return(      
            <Button className="border-slate-400 p-2 rounded-md text-white"
            //  {...props} //espalha as props recebidas pelo componente Input
            type={props.type} 
             placeholder={props.placeholder} 
             value={props.value} 
             onChange={props.onChange}//controla o valor do input com o estado description
            />
        )
}
export default Button;