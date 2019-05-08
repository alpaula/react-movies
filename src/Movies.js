import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 4rem;
  text-shadow: 5px 5px 5px red;
`;

const ContentMovies = styled.div`
  width: 50%;
`;

const Movie = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 50vh;
  margin: 4rem 0;
`;

const ImageMovie = styled.img`
  height: 100%;
  box-shadow: 0 0 5px 5px #fff;
`;

const ContentText = styled.div`
  display: flex;
  flex-direction: column;
 justify-content: space-between;
  width: 40%;
  height: 100%;
  margin-left: 2rem;
`;

const TitleMovie = styled.h1`
  color: #fff;
  text-align: center;
  text-shadow: 5px 5px 5px red;
`;

const Overview = styled.p`
  color: #fff;
`;

class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moviesList: [],
    };
  }

  componentDidMount() {
    this.getMovies();
  }

  getMovies = async () => {
    const movies = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=361b96ea8a305b9fa639795ba4ad5fe4&language=pt-BR");
    const moviesList = [];

    movies.data.results.map(movie => {
      moviesList.push(
        {
          id: movie.id,
          originalTitle: movie.original_title,
          title: movie.title,
          overview: movie.overview,
          posterPath: movie.poster_path,
          genres: movie.genre_ids,
        }
      );
    })

    this.setState({
      moviesList,
    });
    console.log(moviesList);
  }

  renderMovies = () => {
    const { moviesList } = this.state;

    return (
      moviesList.map(movie => (
        <Movie key={movie.id}>
          <ImageMovie src={`https://image.tmdb.org/t/p/w500/${movie.posterPath}`} />
          <ContentText>
            <TitleMovie>{movie.title}</TitleMovie>
            <Overview>{movie.overview}</Overview>
          </ContentText>
        </Movie>
      ))
    );
  }

  render() {
    return (
      <Container>
        <Title>Movies</Title>
        <ContentMovies>
          {this.renderMovies()}
        </ContentMovies>
      </Container>
    )
  }
}

export default Movies;
