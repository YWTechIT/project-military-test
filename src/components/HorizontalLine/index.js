import styled from "styled-components";

const HorizonStyle = styled.hr`
    color: dimgrey;
    width: 80%;
    margin: 10px 10px 16px 10px;
    border: 1px;
    border-bottom: 2px solid;
    background: #fffff;
`;

const HorizonLine = () => {
  return <HorizonStyle></HorizonStyle>;
};

export default HorizonLine;