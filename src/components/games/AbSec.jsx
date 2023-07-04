import React from 'react'
import Video from '../Trailer/Trailer'
import './Pages.css'

function AbSec() {
    return (
        <div className='about-container'>
            <div className="wrapper sec">
                <div className="wrapperItens">
                    <div className="video-area">
                        <Video
                            src={"https://www.youtube.com/embed/z1OESz4zpLs"} />
                    </div>
                </div>
                <div className="wrapperItens text txt-absec">
                    <h2>Assista a game play da parte II</h2>
                    <p>Em "The Last of Us Part II", lançado em 2020, a história se passa alguns anos após os eventos do primeiro jogo. Agora controlamos Ellie, uma adolescente determinada a buscar vingança após sofrer uma tragédia pessoal. Ambientado em um mundo pós-apocalíptico ainda mais brutal e perigoso, o jogo explora temas complexos como ódio, redenção e as consequências de nossas ações. Ellie deve enfrentar não apenas os infectados, mas também outros sobreviventes hostis enquanto ela se aprofunda em uma jornada sombria e emocionalmente intensa, que coloca à prova seus limites físicos e mentais. Com sua jogabilidade aprimorada, narrativa profunda e visuais impressionantes, "The Last of Us Part II" continua a cativar os jogadores e a desafiar as convenções dos jogos de ação e aventura.</p>
                </div>
            </div>
        </div>
    )
}

export default AbSec