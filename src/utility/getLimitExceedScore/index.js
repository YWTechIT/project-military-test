/*
 * Parameter detail of getLimitExceedScore
 *
 * @ param { int }
 *
 * @ example
 *  score = 3
 */

const getLimitExceedLimitScore = (score) => {
  let convertScore = score * 10;

  if (convertScore >= 100) {
    convertScore = 100;
    return convertScore;
  } else {
    return convertScore;
  }
};

export default getLimitExceedLimitScore;