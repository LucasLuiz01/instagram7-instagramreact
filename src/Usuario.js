import catanacomics from "./img/catanacomics.svg"
function Propusuario (props){
    return(
<div class="usuario">
<img src={props.imagem}/>
<div class="texto">
    <strong>{props.nome}</strong>
    <span>
        Catana
        <ion-icon name="pencil" ></ion-icon>
    </span>
</div>
</div>
    )
}
export default function Usuario(){
    return (
       <Propusuario imagem= {catanacomics} nome= "catacomics" />
    )
}

