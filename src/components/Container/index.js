import React from "react";
import styled from "styled-components";

const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  margin-top: 10px;
`;

const Container = (props) => (
    <FlexBox>
      <ContainerWrapper>{props.children}</ContainerWrapper>
    </FlexBox>
);

export default Container;
