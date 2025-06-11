import Section from "../../components/Section/Section";
import Container from "../../components/Container/Container";
import MovieList from "../../components/MovieList/MovieList";
import SearchForm from "../../components/SearchForm/SearchForm";

const MoviesPage = () => {
  return (
    <Section>
      <Container>
        <SearchForm />
        <MovieList />
      </Container>
    </Section>
  );
};

export default MoviesPage;
