import catanacomics from "./img/catanacomics.svg"
import React from "react"
function Propusuario (props){
    const [nome, setNome] = React.useState("catana") 
    return(
<div class="usuario">
<img src={props.imagem}/>
<div class="texto">
    <strong>{props.nomes}</strong>
    <span>
        {nome}
        <ion-icon name="pencil" onClick={()=> setNome(prompt("Você é um robo!"))}></ion-icon>
    </span>
</div>
</div>
    )
}
export default function Usuario(){
    return (
       <Propusuario imagem= {catanacomics} nomes= "catacomics" />
    )
}

   