import React from 'react'
import PostsAndActors from '../postsAndActors/PostsAndActors'
import Btn from '../button/Btn'
import { Fade } from "react-awesome-reveal";
import ScrollToTop from '../scroll/ScrollTop';

function Series() {
  return (

    <div className='series-container' id='serie'>
      <div className="series-presentation">
        <Fade direction='left' duration={2000}>
          <div className="serieslogo">
            <img src="https://hbomax-images.warnermediacdn.com/2022-12/TT.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com" />
          </div>
        </Fade>

        <Fade duration={4000}>
          <div className="series-rating">
            <img id='tomato' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Rotten_Tomatoes.svg/2019px-Rotten_Tomatoes.svg.png" />
            <p>96%</p>
            <p>2023</p>
            <p><span>•</span> Action, Adventure, Drama</p>
          </div>
          <p>Vinte anos após a queda da civilização, Joel é contratado pra tirar Ellie de uma zona de quarentena perigosa. O que começa como um pequeno trabalho, logo se transforma em uma jornada brutal pela sobrevivência.</p>
          <div className="buttons">
            <Btn outline={false}><a href="https://www.hbomax.com/br/pt/series/urn:hbo:series:GYyofRQHeuJ6fiQEAAAEy" target="_blank">Confira</a></Btn>
            <Btn outline={true}><a href="https://www.youtube.com/watch?v=IpjRuuFEPMk" target="_blank">Trailer</a></Btn>
          </div>
        </Fade>
      </div>

      <div className="pAndActors">
        <PostsAndActors />
      </div>
    </div>
  )
}

export default Series