import './Button.css'; 
function Button ({text, onClick}){
    return(
        <button onClick={onClick} className= "button is-warning">{text}</button>
    )
}

export default Button;
