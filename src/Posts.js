import adorable from "./img/adorable_animals.svg"
import barked from "./img/barked.svg"
import dog from "./img/dog.svg"
import gato from "./img/gato-telefone.svg"
import meowed from "./img/meowed.svg"
import respondeai from "./img/respondeai.svg"

export default function Posts() {
    const dados = [
        {nome:"adorable_animals", imagem : adorable, conteudoImagem : gato, curtidasImagem : respondeai, textoCurtida : "respondeai"},
        {nome:"barked", imagem : barked, conteudoImagem : dog, curtidasImagem : adorable, textoCurtida : "adorable_animals"}
    ]
    return (
        <div class="posts">
            {dados.map((d)=>
             <div class="post">
             <div class="topo">
                 <div class="usuario">
                     <img src={d.imagem} />
                     {d.nome}
                 </div>
                 <div class="acoes">
                     <ion-icon name="ellipsis-horizontal"></ion-icon>
                 </div>
             </div>

             <div class="conteudo">
                 <img src={d.conteudoImagem} />
             </div>

             <div class="fundo">
                 <div class="acoes">
                     <div>
                         <ion-icon name="heart-outline"></ion-icon>
                         <ion-icon name="chatbubble-outline"></ion-icon>
                         <ion-icon name="paper-plane-outline"></ion-icon>
                     </div>
                     <div>
                         <ion-icon name="bookmark-outline"></ion-icon>
                     </div>
                 </div>

                 <div class="curtidas">
                     <img src={d.curtidasImagem} />
                     <div class="texto">
                         Curtido por <strong>{d.textoCurtida}</strong> e <strong>outras 101.523 pessoas</strong>
                     </div>
                 </div>
             </div>
         </div>
            )}
           
        </div>
    )
}