import badvibes from "./img/bad.vibes.memes.svg"
import chibirdart from "./img/chibirdart.svg"
import razoesparaacreditar from "./img/razoesparaacreditar.svg"
import smallcutecats from "./img/smallcutecats.svg"
import adorable from "./img/adorable_animals.svg"
export default function Sugestoes(){
    return (
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
    )
}