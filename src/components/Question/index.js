import styled from "styled-components";

const QuestionWrapper = styled.div`
  width: 100%;
`;

const QuestionLabel = styled.h1`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
  text-align: center;
  color: grey;
`;

const QuestionTitle = styled.div`
  font-size: 22px;
  padding: 20px;
  margin: 0 10px; 
  box-sizing: border-box;
  line-height: 135%;
`;

const Question = ({ QUIZZES, currentNo }) => (
  <QuestionWrapper>
    <QuestionLabel>
      <span>{QUIZZES[currentNo].id}</span>/{QUIZZES.length}
    </QuestionLabel>
    <QuestionTitle>{QUIZZES[currentNo].question}</QuestionTitle>
  </QuestionWrapper>
);

export default Question;
