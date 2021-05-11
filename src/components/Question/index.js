import styled from "styled-components";

const QuestionWrapper = styled.div`
  width: 400px;
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
  margin-bottom: 8px;
  box-sizing: border-box;
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
