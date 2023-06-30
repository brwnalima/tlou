import React from 'react'
import './mainBanner.css'
import Btn from '../button/Btn'

function Banner() {
  return (
    <div className='banner-container'>
      <div className="text-area">
        <h1>Uma Jornada Emocionante em um Mundo Pós-Apocalíptico</h1>
        <p>Com sua atmosfera sombria e personagens complexos, "The Last of Us" conquistou os corações dos jogadores ao oferecer uma experiência única e emocional no mundo dos videogames.</p>

        <div className="banner-btn">
          <Btn outline={true}>Botão Inteiro</Btn>
        </div>
      </div>
    </div>
  )
}

export default Banner