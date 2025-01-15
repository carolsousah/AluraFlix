import styles from './Player.module.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';



function Player() {
    const [video, setVideo] = useState(null);
    const parametros = useParams();

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/carolsousah/API-aluraflix/videos?id=${parametros.id}`)
            .then(resposta => resposta.json())
            .then(dados => {
                if (dados && dados.length > 0) {
                    setVideo(dados[0]);
                } else {
                    setVideo(null);
                }
            })
            .catch(() => setVideo(null));
    }, [parametros.id]);

    if (video === null) {
        return (
            <div className={styles.playerWrapper}>
                <div className={styles.erroContainer}>
                    <p className={styles.erro}>O vídeo solicitado não foi encontrado.</p>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.playerWrapper}>
            <div className={styles.playerContainer}>
                <iframe
                    width="100%"
                    src={video.link}
                    title={video.titulo}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
            </div>
        </div>
    );
}


export default Player
