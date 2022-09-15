import gag from "./img/9gag.svg"
import filomoderna from "./img/filomoderna.svg"
import memeriagourmet from "./img/memeriagourmet.svg"
import nathanwpylestrangeplanet from "./img/nathanwpylestrangeplanet.svg"
import wawawicomics from "./img/wawawicomics.svg"
import barked from "./img/barked.svg"
import meowed from "./img/meowed.svg"
import respondeai from "./img/respondeai.svg"



export default function Stories(){
    return(
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
)
}