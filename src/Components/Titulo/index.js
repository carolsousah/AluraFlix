import styles from "./Titulo.module.css"

function Titulo({children, className}){
    return(
        <div className={`${styles.texto} ${className}`}>
            {children}
        </div>

    )
}

export default Titulo