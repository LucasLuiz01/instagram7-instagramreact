import catanacomics from "./img/catanacomics.svg"
import React from "react"
function Propusuario(props) {
    const [nome, setNome] = React.useState("catana")
    const [foto, setFoto] = React.useState(catanacomics)
    const [usuario, setUsuario] = React.useState("catanacomics")
    function mudarNome() {
        (setNome(prompt("Insira seu nome aqui")));
        (setUsuario(prompt("Insira o nome do seu usuario aqui")));
    }
    return (
        <div class="usuario">
            <img src={foto} onClick={() => setFoto(prompt("Insira o link da sua foto aqui"))} />
            <div class="texto">
                <strong>{usuario}</strong>
                <span>
                    {nome}
                    <ion-icon name="pencil" onClick={mudarNome}></ion-icon>
                </span>
            </div>
        </div>
    )

}
export default function Usuario() {
    return (
        <Propusuario />
    )
}

