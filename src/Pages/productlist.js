import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
function Productlist() {
  const Container = styled.div``;

  const Title = styled.h1`
    margin: 20px;
  `;

  const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
  `;

  const Filter = styled.div`
    margin: 20px;
    ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
  `;

  const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({ marginRight: "0px" })}
  `;

  const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({ margin: "10px 0px" })}
  `;

  const Option = styled.option``;

  return (
    <div>
      <Container>
        <Title>our Necklaces</Title>
        <FilterContainer>
          <Filter>
            <FilterText>Filter Products:</FilterText>
            <Select>
              <Option disabled selected>
                Color
              </Option>
              <Option>White</Option>
              <Option>Black</Option>
              <Option>Red</Option>
              <Option>Blue</Option>
              <Option>Yellow</Option>
              <Option>Green</Option>
            </Select>
          </Filter>

          <Filter>
            <FilterText>Sort Products:</FilterText>
            <Select>
              <Option disabled selected>
                Newest
              </Option>
              <Option>Price (asc)</Option>
              <Option>Price (desc)</Option>
            </Select>
          </Filter>
        </FilterContainer>
      </Container>
    </div>
  );
}

export default Productlist;
