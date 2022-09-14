import logo from "./img/logo.png"
import Corpo from "./Corpo"

export default function App() {
    return (
        <div>
            <div class="navbar">
                <div class="container">
                    <div class="logo">
                        <ion-icon name="logo-instagram"></ion-icon>
                        <div class="separador"></div>
                        <img src={logo} />
                    </div>

                    <div class="logo-mobile">
                        <ion-icon name="logo-instagram"></ion-icon>
                    </div>

                    <div class="instagram-mobile">
                        <img src={logo} />
                    </div>

                    <div class="pesquisa">
                        <input type="text" placeholder="Pesquisar" />
                    </div>

                    <div class="icones">
                        <ion-icon name="paper-plane-outline"></ion-icon>
                        <ion-icon name="compass-outline"></ion-icon>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="person-outline"></ion-icon>
                    </div>

                    <div class="icones-mobile">
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                </div>
            </div>

          <Corpo />

            <div class="fundo-mobile">
                <ion-icon name="home"></ion-icon>
                <ion-icon name="search-outline"></ion-icon>
                <ion-icon name="add-circle-outline"></ion-icon>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="person-outline"></ion-icon>
            </div>
        </div>
    )
}