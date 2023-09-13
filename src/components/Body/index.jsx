import React, { useState } from "react";
import { Container } from "./style";
import { database } from "../../mock";

function Body() {
  const [data, setData] = useState(database);

  const onDelete = (id) => {
    const updatedUsers = data.filter((val) => val.id !== id);
    setData(updatedUsers);
  };

  return (
    <Container>
      {data.map((value) => {
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
