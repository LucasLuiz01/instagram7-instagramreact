import adorable from "./img/adorable_animals.svg"
import barked from "./img/barked.svg"
import dog from "./img/dog.svg"
import gato from "./img/gato-telefone.svg"
import respondeai from "./img/respondeai.svg"
import React from "react"
function Postprops(props) {
    const [contador, setContador] = React.useState(Number(props.curtidas));
    const [salvar, setSalvar] = React.useState("bookmark-outline");
    const [like, setLike] = React.useState("heart-outline");
    const [vermelho, setVermelho] = React.useState("none");
    function liked() {
        (like === "heart-outline") ? setLike("heart") : setLike("heart-outline");
        (vermelho === "none") ? setVermelho("danger") : setVermelho("none");
        (vermelho === "none") ? setContador(contador + 0.001) : setContador(contador - 0.001);
    }
    function salvarpost() {
        (salvar === "bookmark-outline") ? setSalvar("bookmark") : setSalvar("bookmark-outline");
    }
    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.imagem} />
                    {props.nome}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={props.conteudoImagem} />
            </div>
            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name={like} color={vermelho} onClick={liked}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name={salvar} onClick={salvarpost}></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.perfilCurtidasImagem} />
                    <div class="texto">
                        Curtido por <strong>{props.textoCurtida}</strong> e <strong>outras {Number(contador)} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default function Posts() {
    const dados = [
        { nome: "adorable_animals", imagem: adorable, conteudoImagem: gato, perfilCurtidasImagem: respondeai, textoCurtida: "respondeai", curtidas: "101.523" },
        { nome: "barked", imagem: barked, conteudoImagem: dog, perfilCurtidasImagem: adorable, textoCurtida: "adorable_animals", curtidas: "200.541" }
    ]
    return (
        <div class="posts">
            {dados.map((d) =>
                <Postprops nome={d.nome} imagem={d.imagem} conteudoImagem={d.conteudoImagem} perfilCurtidasImagem={d.perfilCurtidasImagem} textoCurtida={d.textoCurtida} curtidas={d.curtidas} />
            )}

        </div>
    )
}