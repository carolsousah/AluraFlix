import { Link } from "react-router-dom"
import logo from "./logo.png"
import styles from "./Cabecalho.module.css"
import CabecalhoLink from "Components/CabecalhoLink"

function Cabecalho() {
    return (
        <header className={styles.cabecalho}>
            <Link to="./">
                <img src={logo} alt="Logo do Aluraflix"></img>
            </Link>
            <nav>
                <CabecalhoLink url="./">
                    HOME
                </CabecalhoLink>
                <CabecalhoLink url="./NovoVideo">
                    NOVO VÍDEO
                </CabecalhoLink>

            </nav>
        </header>
    )
}

export default Cabecalho