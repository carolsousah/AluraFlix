import Banner from "Components/Banner";
import Titulo from "Components/Titulo";
import styles from "./Inicio.module.css";
import Card from "Components/Card";
import { useState, useEffect } from 'react';
import ModalEdit from "Components/ModalEdit";

function Inicio() {
  const [videoList, setVideoList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingVideo, setEditingVideo] = useState(null);

  // Carregar os vídeos da API
  useEffect(() => {
    fetch('https://my-json-server.typicode.com/carolsousah/API-aluraflix/videos')
      .then(response => response.json())
      .then(dados => setVideoList(dados))
      .catch(error => console.error("Erro ao carregar os vídeos:", error));
  }, []);

  const handleAdd = (newVideo) => {
    setVideoList([...videoList, { ...newVideo, id: videoList.length + 1 }]);
  };

  const handleEdit = (id) => {
    const videoToEdit = videoList.find(video => video.id === id);
    if (videoToEdit) {
      setEditingVideo(videoToEdit);
      setIsEditModalOpen(true);
    }
  };

  const handleDelete = (id) => {
    const updatedVideos = videoList.filter(video => video.id !== id);
    setVideoList(updatedVideos);
  };

  const categorias = ["front", "back", "mobile"];
  const videosPorCategoria = categorias.reduce((acc, categoria) => {
    acc[categoria] = videoList.filter(video => video.categoria === categoria);
    return acc;
  }, {});

  return (
    <>
      <Banner imagem="home" />
      <Titulo className={styles.front}>FRONT END</Titulo>
      <section className={styles.container}>
        {videosPorCategoria.front?.map((video) => (
          <Card
            {...video}
            key={video.id}
            className={styles.frontCard}
            onEdit={() => handleEdit(video.id)}
            onDelete={() => handleDelete(video.id)}
          />
        ))}
      </section>

      <Titulo className={styles.back}>BACK END</Titulo>
      <section className={styles.container}>
        {videosPorCategoria.back?.map((video) => (
          <Card
            {...video}
            key={video.id}
            className={styles.backCard}
            onEdit={() => handleEdit(video.id)}
            onDelete={() => handleDelete(video.id)}
          />
        ))}
      </section>

      <Titulo className={styles.mobile}>MOBILE</Titulo>
      <section className={styles.container}>
        {videosPorCategoria.mobile?.map((video) => (
          <Card
            {...video}
            key={video.id}
            className={styles.mobileCard}
            onEdit={() => handleEdit(video.id)}
            onDelete={() => handleDelete(video.id)}
          />
        ))}
      </section>

      {isEditModalOpen && (
        <ModalEdit
          video={editingVideo}
          onClose={() => setIsEditModalOpen(false)}
          onUpdate={(updatedVideo) => {
            const updatedVideos = videoList.map((video) =>
              video.id === updatedVideo.id ? updatedVideo : video
            );
            setVideoList(updatedVideos);
            setIsEditModalOpen(false);
          }}
        />
      )}
    </>
  );
}

export default Inicio;

