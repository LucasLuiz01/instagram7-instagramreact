import catanacomics from "./img/catanacomics.svg"
let name = "catanacomics"
export default function Usuario(){
    return (
        <div class="usuario">
            <img src={catanacomics}/>
            <div class="texto">
                <strong>{name}</strong>
                <span>
                    Catana
                    <ion-icon name="pencil" onClick={TrocarNome} ></ion-icon>
                </span>
            </div>
        </div>
    )
}
function TrocarNome (){
    const name = prompt("Qual é o seu nome de usuário?")
}