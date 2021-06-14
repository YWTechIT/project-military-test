import styled from "styled-components";
import PropTypes from 'prop-types';

const QuestionWrapper = styled.div`
  width: 100%;
`;

const QuestionLabel = styled.h2`
  text-align: center;
  color: grey;
`;

const QuestionTitle = styled.div`
  font-size: 22px;
  padding: 20px;
  margin: 0 10px; 
  box-sizing: border-box;
  line-height: 135%;
  @media screen and (min-width: 600px){
    font-size: 24px;
  }
`;

const Question = ({ QUIZZES, currentNo }) => (
  <QuestionWrapper>
    <QuestionLabel>
      <span>{QUIZZES[currentNo].id}</span>/{QUIZZES.length}
    </QuestionLabel>
    <QuestionTitle>{QUIZZES[currentNo].question}</QuestionTitle>
  </QuestionWrapper>
);

Question.propTypes = {
  QUIZZES: PropTypes.array.isRequired,
  currentNo: PropTypes.number.isRequired,
}

export default Question;
