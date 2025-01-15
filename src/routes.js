import Cabecalho from "Components/Cabecalho"
import Rodape from "Components/Rodape"
import Inicio from "Pages/Inicio"
import NovoVideo from "Pages/NovoVideo"
import Player from "Pages/Player"
import NaoEncontrada from "Pages/NaoEncontrada"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function AppRoutes() {
    return (
        <BrowserRouter>
            <Cabecalho />
            <Routes>
                <Route path="/" element={<Inicio />}></Route>
                <Route path="/NovoVideo" element={<NovoVideo />}></Route>
                <Route path="player/:id" element={<Player />}  ></Route>
                <Route path="*" element={<NaoEncontrada />} ></Route>
            </Routes>
            <Rodape />
        </BrowserRouter>
    )
}

export default AppRoutes




