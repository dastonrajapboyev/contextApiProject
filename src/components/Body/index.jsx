import React, {  useContext } from "react";
import { Container } from "./style";
import { MovieContext } from "../../Context";

function Body() {
  const {movie, setMovie} = useContext(MovieContext)

  const onDelete = (id) => {
    const updatedUsers = movie.filter((val) => val.id !== id);
    setMovie(updatedUsers);
  };

  return (
    <Container>
      {movie.map((value) => {
        return (
          <Container.Card key={value.id}>
            <Container.CardImg src={value.url} />
            <Container.CardTitle>{value.name}</Container.CardTitle>
            <Container.CardButton onClick={() => onDelete(value.id)}>
              Delete
            </Container.CardButton>
          </Container.Card>
        );
      })}
    </Container>
  );
}

export default Body;
