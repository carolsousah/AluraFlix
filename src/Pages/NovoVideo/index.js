import React, { useState } from "react";
import styles from "./NovoVideo.module.css";
import { useNavigate } from "react-router-dom";

function NovoVideo({ onAdd, onClose }) {
    const [newVideo, setNewVideo] = useState({
        titulo: "",
        capa: "",
        categoria: "",
        videoLink: "",
    });

    const navigate = useNavigate(); // Hook para navegação

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewVideo((prevVideo) => ({
            ...prevVideo,
            [name]: value,
        }));
    };

    const handleClear = () => {
        setNewVideo({
            titulo: "",
            capa: "",
            categoria: "",
            videoLink: "",
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (newVideo.titulo && newVideo.capa && newVideo.categoria && newVideo.videoLink) {
            try {
                const response = await fetch('https://my-json-server.typicode.com/carolsousah/API-aluraflix/videos', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newVideo),
                });

                if (response.ok) {
                    const data = await response.json();
                    onAdd(data);
                    alert('Vídeo criado com sucesso!');
                    handleClear();
                    onClose();  // Fecha o formulário
                    navigate("/");  // Redireciona para a página inicial após o sucesso
                } else {
                    alert('Erro ao criar vídeo. Tente novamente.');
                }
            } catch (error) {
                console.error('Erro ao enviar requisição:', error);
                alert('Ocorreu um erro. Verifique sua conexão e tente novamente.');
            }
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>NOVO VÍDEO</h2>
            <p className={styles.description}>COMPLETE O FORMULÁRIO PARA CRIAR UM NOVO CARD DE VÍDEO.</p>
            <h3 className={styles.cardTitle}>Criar Card</h3>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                    <div className={styles.formRow}>
                        <div className={styles.inputGroup}>
                            <label htmlFor="titulo">Título:</label>
                            <input
                                type="text"
                                id="titulo"
                                name="titulo"
                                value={newVideo.titulo}
                                onChange={handleInputChange}
                                className={styles.inputField}
                                placeholder="Digite o título do vídeo"
                            />
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="categoria">Categoria:</label>
                            <select
                                id="categoria"
                                name="categoria"
                                value={newVideo.categoria}
                                onChange={handleInputChange}
                                className={styles.inputField}
                            >
                                <option value="">Selecione a categoria</option>
                                <option value="Front End">FRONT END</option>
                                <option value="Back End">BACK END</option>
                                <option value="Mobile">MOBILE</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className={styles.formGroup}>
                    <div className={styles.formRow}>
                        <div className={styles.inputGroup}>
                            <label htmlFor="capa">Imagem (URL):</label>
                            <input
                                type="text"
                                id="capa"
                                name="capa"
                                value={newVideo.capa}
                                onChange={handleInputChange}
                                className={styles.inputField}
                                placeholder="Insira o link da capa do vídeo"
                            />
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="videoLink">Link do Vídeo:</label>
                            <input
                                type="text"
                                id="videoLink"
                                name="videoLink"
                                value={newVideo.videoLink}
                                onChange={handleInputChange}
                                className={styles.inputField}
                                placeholder="Insira o link do vídeo"
                            />
                        </div>
                    </div>
                </div>
                <div className={styles.actionButtons}>
                    <button type="submit" className={styles.save}>SALVAR</button>
                    <button type="button" className={styles.clear} onClick={handleClear}>LIMPAR</button>
                </div>
            </form>
        </div>
    );
}

export default NovoVideo;


