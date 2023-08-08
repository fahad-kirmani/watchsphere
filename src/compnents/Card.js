import React from 'react'
import './card.scss';
import { Link } from 'react-router-dom';

const Card = (props) => {
    const { name, genres, imgsrc, premiered, runtime , summary, ratings} = props;
  return (
    <div>
    <div class="movie_card" id="bright">
  <div class="info_section">
    <div class="movie_header">
      <img class="locandina" src={imgsrc} alt='movie'/>
      <h1>{name}</h1>
      <h4>{premiered}</h4>
      <span class="minutes">{runtime+" min"}</span>
      <p class="type">{genres.join(", ")}</p>
    </div>
    <Link to={"/show"}
        state= {{ name, genres, imgsrc, premiered, runtime , summary, ratings }}
        ><button class="button"> know details
</button></Link>
  </div>
  <div class="blur_back bright_back" style={{backgroundImage : `linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)), url(${imgsrc})`}}></div>
</div>
    </div>
  )
}

export default Card