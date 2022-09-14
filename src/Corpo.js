import gag from "./img/9gag.svg"
import adorable from "./img/adorable_animals.svg"
import badvibes from "./img/bad.vibes.memes.svg"
import barked from "./img/barked.svg"
import catanacomics from "./img/catanacomics.svg"
import chibirdart from "./img/chibirdart.svg"
import dog from "./img/dog.svg"
import filomoderna from "./img/filomoderna.svg"
import gato from "./img/gato-telefone.svg"
import memeriagourmet from "./img/memeriagourmet.svg"
import meowed from "./img/meowed.svg"
import nathanwpylestrangeplanet from "./img/nathanwpylestrangeplanet.svg"
import razoesparaacreditar from "./img/razoesparaacreditar.svg"
import respondeai from "./img/respondeai.svg"
import smallcutecats from "./img/smallcutecats.svg"
import wawawicomics from "./img/wawawicomics.svg"
export default function Corpo(){
    return (  <div class="corpo">
    <div class="esquerda">
        <div class="stories">
            <div class="story">
                <div class="imagem">
                    <img src={gag} />
                </div>
                <div class="usuario">
                    9gag
                </div>
            </div>

            <div class="story">
                <div class="imagem">
                    <img src={meowed} />
                </div>
                <div class="usuario">
                    meowed
                </div>
            </div>

            <div class="story">
                <div class="imagem">
                    <img src={barked} />
                </div>
                <div class="usuario">
                    barked
                </div>
            </div>

            <div class="story">
                <div class="imagem">
                    <img src={nathanwpylestrangeplanet} />
                </div>
                <div class="usuario">
                    nathanwpylestrangeplanet
                </div>
            </div>

            <div class="story">
                <div class="imagem">
                    <img src={wawawicomics} />
                </div>
                <div class="usuario">
                    wawawicomics
                </div>
            </div>

            <div class="story">
                <div class="imagem">
                    <img src={respondeai} />
                </div>
                <div class="usuario">
                    respondeai
                </div>
            </div>

            <div class="story">
                <div class="imagem">
                    <img src={filomoderna} />
                </div>
                <div class="usuario">
                    filomoderna
                </div>
            </div>

            <div class="story">
                <div class="imagem">
                    <img src={memeriagourmet} />
                </div>
                <div class="usuario">
                    memeriagourmet
                </div>
            </div>

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>

        <div class="posts">
            <div class="post">
                <div class="topo">
                    <div class="usuario">
                        <img src={meowed} />
                        meowed
                    </div>
                    <div class="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>

                <div class="conteudo">
                    <img src={gato} />
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
                        <img src={respondeai} />
                        <div class="texto">
                            Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>
                        </div>
                    </div>
                </div>
            </div>

            <div class="post">
                <div class="topo">
                    <div class="usuario">
                        <img src={barked} />
                        barked
                    </div>
                    <div class="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>

                <div class="conteudo">
                    <img src={dog} />
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
                        <img src={adorable} />
                        <div class="texto">
                            Curtido por <strong>adorable_animals</strong> e <strong>outras 99.159 pessoas</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="sidebar">
        <div class="usuario">
            <img src={catanacomics} />
            <div class="texto">
                <strong>catanacomics</strong>
                <span>
                    Catana
                    <ion-icon name="pencil"></ion-icon>
                </span>
            </div>
        </div>

        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            <div class="sugestao">
                <div class="usuario">
                    <img src={badvibes} />
                    <div class="texto">
                        <div class="nome">bad.vibes.memes</div>
                        <div class="razao">Segue você</div>
                    </div>
                </div>

                <div class="seguir">Seguir</div>
            </div>

            <div class="sugestao">
                <div class="usuario">
                    <img src={chibirdart} />
                    <div class="texto">
                        <div class="nome">chibirdart</div>
                        <div class="razao">Segue você</div>
                    </div>
                </div>

                <div class="seguir">Seguir</div>
            </div>

            <div class="sugestao">
                <div class="usuario">
                    <img src={razoesparaacreditar} />
                    <div class="texto">
                        <div class="nome">razoesparaacreditar</div>
                        <div class="razao">Novo no Instagram</div>
                    </div>
                </div>

                <div class="seguir">Seguir</div>
            </div>

            <div class="sugestao">
                <div class="usuario">
                    <img src={adorable} />
                    <div class="texto">
                        <div class="nome">adorable_animals</div>
                        <div class="razao">Segue você</div>
                    </div>
                </div>

                <div class="seguir">Seguir</div>
            </div>

            <div class="sugestao">
                <div class="usuario">
                    <img src={smallcutecats} />
                    <div class="texto">
                        <div class="nome">smallcutecats</div>
                        <div class="razao">Segue você</div>
                    </div>
                </div>

                <div class="seguir">Seguir</div>
            </div>
        </div>

        <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
            Hashtags • Idioma
        </div>

        <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
        </div>
    </div>
</div>)
}