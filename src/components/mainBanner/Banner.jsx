import React from 'react'
import './mainBanner.css'
import Btn from '../button/Btn'
import { Fade } from "react-awesome-reveal";

function Banner() {
  return (
    <div className='banner-container'>
      <Fade duration={4000}>
        <div className="text-area">
          <h1>Uma Jornada Emocionante em um Mundo Pós-Apocalíptico</h1>
          <p>Com sua atmosfera sombria e personagens complexos, "The Last of Us" conquistou os corações dos jogadores ao oferecer uma experiência única e emocional no mundo dos videogames.</p>
          <div className="banner-btn">
            <Btn outline={true}>Saiba mais</Btn>
          </div>

          <div className="hide">
            <p>Veja abaixo tudo sobre um dos maiores jogos das últimas décadas.</p>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default Banner