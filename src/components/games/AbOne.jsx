import React from 'react'
import Video from '../Trailer/Trailer'
import './Games.css'
import { Slide, Fade } from "react-awesome-reveal";
import ScrollToTop from '../scroll/ScrollTop';

function AbOne() {
    return (
        <div className='about-container'>
            <div className="wrapper">
                <div className="wrapperItens">
                    <Slide duration={1500}>
                        <div className="video-area">
                            <Video
                                src={"https://www.youtube.com/embed/aGBPysEgDb0"} />
                        </div>
                    </Slide>
                </div>

                <div className="wrapperItens text">
                    <Fade duration={2000}>
                        <h2>Assista a game play do primeiro jogo</h2>
                        <p>"The Last of Us", desenvolvido pela Naughty Dog e lançado em 2013, é um jogo de ação e aventura que se passa em um mundo pós-apocalíptico devastado por uma epidemia de um fungo que transforma seres humanos em criaturas agressivas chamadas infectados. O jogo segue a história de Joel, um homem endurecido pela perda e pela luta pela sobrevivência, e Ellie, uma jovem corajosa e imune ao fungo. Juntos, eles embarcam em uma jornada perigosa e emocionante através de uma América em ruínas, enfrentando ameaças humanas e infectadas, enquanto exploram temas complexos como sobrevivência, sacrifício e esperança. Com sua narrativa envolvente, personagens cativantes e jogabilidade envolvente, "The Last of Us" conquistou tanto a crítica quanto os jogadores, tornando-se um dos títulos mais aclamados e influentes da última década.</p>
                    </Fade>
                </div>

            </div>
            <div className="scroll"><ScrollToTop/></div>
        </div>
    )
}

export default AbOne