import styled from "styled-components";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 48px);
  grid-column-gap: 8px;
  justify-content: center;
  margin-bottom: 16px;
`;

const SocialButtonGroup = () => {
  return (
    <GridContainer>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>4</button>
    </GridContainer>
  );
};

export default SocialButtonGroup;
