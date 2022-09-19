import badvibes from "./img/bad.vibes.memes.svg"
import chibirdart from "./img/chibirdart.svg"
import razoesparaacreditar from "./img/razoesparaacreditar.svg"
import smallcutecats from "./img/smallcutecats.svg"
import adorable from "./img/adorable_animals.svg"
export default function Sugestoes() {
    const seguidores = [
        { nome: "bad.vibes.memes", imagem: badvibes },
        { nome: "chibirdart", imagem: chibirdart },
        { nome: "razoesparaacreditar", imagem: razoesparaacreditar },
        { nome: "adorable_animals", imagem: adorable },
        { nome: "smallcutecats", imagem: smallcutecats }
    ]
    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {seguidores.map((s) =>
                <div class="sugestao">
                    <div class="usuario">
                        <img src={s.imagem} />
                        <div class="texto">
                            <div class="nome">{s.nome}</div>
                            <div class="razao">Segue você</div>
                        </div>
                    </div>

                    <div class="seguir">Seguir</div>
                </div>
            )}

        </div>
    )
}