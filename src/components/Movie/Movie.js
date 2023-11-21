import React from 'react';
import styled from 'styled-components';

const Movie = (props) => {
    const { title, date, image, genre } = props
    const url_image = `https://image.tmdb.org/t/p/w300/${image}`

    return (
        <MovieStyle>
            <img
                className="Movie__image"
                src={url_image}
                alt=""
            />
            <h4 className="movie__title">{title}</h4>
            <h4 className="movie__date">{genre}</h4>
            <p className="movie__date">{date}</p>
        </MovieStyle>
    );
}

const MovieStyle = styled.div`
margin-bottom: 1rem;


.movie__image {
    border-radius: 25px;
    max-width: 100%;
    height: auto;
    margin-bottom: 1rem;
}
.movie__title {
    color: #4361ee;
    font-size: 1.95rem;
    margin-bottom: 0.5rem;
}

.movie__date {
    color: #4361ee;
}
@media (min-width: 768px) {

    flex-basis: 50%;

}

@media (min-width:992px) {

        flex-basis: 25%;
        padding: 1rem;
    
}
`

export default Movie;