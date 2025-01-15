import styles from "./Rodape.module.css"
import logo from "./logoRodape.png"

function Rodape(){
    return(
        <footer className={styles.rodape}>
            <img src={logo} alt="Logo do Aluraflix"></img>
        </footer>
    )
}

export default Rodape

