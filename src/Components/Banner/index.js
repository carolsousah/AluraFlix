import styles from "./Banner.module.css"

function Banner({ imagem }) {
    return (
        <div className={styles.capa}
            style={{ backgroundImage: `url('/imagens/banner-${imagem}.png')` }}
        >
            <div className={styles.secaoExtra}>
                <span className={styles.front}>FRONT END</span>
            </div>

            <h1 className={styles.titulo}>SEO com React</h1>
            <p className={styles.texto}>
                Eu to aqui pra nesse vídeo dizer que a gente vai aprender a começar uma app inspirada no desenho Pokémon com Nextjs e React, ver algumas dicas sobre performance e de quebra conhecer uma plataforma sensacional pra fazer deploy que é a Vercel. Tudo em 22 minutos nesse vídeo feito com todo o carinho do mundo construindo uma "Pokedex"!
            </p>
            <iframe
                className={styles.video}
                width="480"
                height="270"
                src="https://www.youtube.com/embed/c8mVlakBESE"
                title="Vídeo do YouTube"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    )
}

export default Banner