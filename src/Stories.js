import gag from "./img/9gag.svg"
import filomoderna from "./img/filomoderna.svg"
import memeriagourmet from "./img/memeriagourmet.svg"
import nathanwpylestrangeplanet from "./img/nathanwpylestrangeplanet.svg"
import wawawicomics from "./img/wawawicomics.svg"
import barked from "./img/barked.svg"
import meowed from "./img/meowed.svg"
import respondeai from "./img/respondeai.svg"

export default function Stories() {
    const nomes = [
        { nome: "9gag", imagem: gag },
        { nome: "meowed", imagem: meowed },
        { nome: "barked", imagem: barked },
        { nome: "nathanwpylestrangeplanet", imagem: nathanwpylestrangeplanet },
        { nome: "wawawicomics", imagem: wawawicomics },
        { nome: "respondeai", imagem: respondeai },
        { nome: "filomoderna", imagem: filomoderna },
        { nome: "memeriagourmet", imagem: memeriagourmet }
    ]
    return (
        <div class="stories">
            {nomes.map((dados) =>
                <div class="story">
                    <div class="imagem">
                        <img src={dados.imagem} />
                    </div>
                    <div class="usuario">
                        {dados.nome}
                    </div>
                </div>
            )}
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}