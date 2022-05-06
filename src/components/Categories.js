import React from "react";
import styled from "styled-components";
import { Categories } from "../data";
import { mobile } from "../responsive";
import Categoryitem from "./Categoryitem";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;

const categories = () => {
  return (
    <div>
      <h1 style={{ color: "black", textAlign: "center", marginTop: "5%" }}>
        {" "}
        Categories{" "}
      </h1>

      <Container>
        {Categories.map((item) => (
          <Categoryitem item={item} key={item.id} />
        ))}
      </Container>
    </div>
  );
};

export default categories;
