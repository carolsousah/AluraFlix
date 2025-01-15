import styles from "./Card.module.css";
import iconeDeletar from "./deletar.frase.png";
import iconeEditar from "./editar.frase.png";
import { Link } from "react-router-dom";

function Card({ id, titulo, capa, className, videoLink, onEdit, onDelete, categoria }) {

    return (
        <div className={`${styles.container} ${className}`}>
            {/* Link apenas em volta da capa e título */}
            <Link to={`/player/${id}`} className={styles.link}>
                <img src={capa} alt={titulo} className={styles.capa} />
                <h2>{titulo}</h2>
            </Link>

            <div className={styles.icones}>
                <img
                    src={iconeDeletar}
                    alt="Deletar vídeo"
                    className={styles.deletar}
                    onClick={() => onDelete(id)}
                />
                <img
                    src={iconeEditar}
                    alt="Editar vídeo"
                    className={styles.editar}
                    onClick={() => onEdit({ id, titulo, capa, videoLink, categoria })}
                />
            </div>
        </div>
    );
}

export default Card;

