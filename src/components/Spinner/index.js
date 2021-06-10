import { useContext } from "react";
import HashLoader from "react-spinners/HashLoader";
import styled, { ThemeContext } from "styled-components";

const Flex = styled.div`
  display: flex;
  margin-top: 50px;
`;

const Spinner = () => {
  const themeContext = useContext(ThemeContext);
  const color = themeContext.primaryColor100;

  return (
    <Flex>
      <HashLoader size={160} color={color} />;
    </Flex>
  );
};

export default Spinner;
