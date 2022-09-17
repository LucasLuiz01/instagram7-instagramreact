import catanacomics from "./img/catanacomics.svg"
import React from "react"
function Propusuario (props){
    const [nome, setNome] = React.useState("catana") 
    const [foto, setFoto] = React.useState(catanacomics)
    return(
<div class="usuario">
<img src={foto} onClick={()=> setFoto (prompt("Insira o link da sua foto aqui"))} />
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
       <Propusuario nomes= "catacomics" />
    )
}

   