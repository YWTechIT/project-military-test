/*
 * Parameter detail of getChangeParameterName
 *
 * @ param {Object(key:value), Object(key:value)}
 * 
 * @ description 
 *   1. higherObj와 queryId 동시에 받는다.
 *   2. higherObj가 combat / supply Obj인지 확인한다.
 *   3. assign 연산자를 이용해 queryId의 key를 의미가 없는 숫자에서 의미가 있는 변수인 한글 parameter로 바꾼다.
 *   4. resultSection으로 props로 전송해 progressBar에 사용한다.
 * 
 * @ example
 *   higherObj = {
 *      infantry: 1,
 *      artillery: 2,
 *      signal: 3,
 *      .
 *      .
 *      .
 *  }
 * 
 *  queryObj = {
 *      0: 1,
 *      1: 2,
 *      2: 3,
 *      .
 *      .
 *      .
 *  }
 */

const getChangeParameterName = (higherObj, queryObj) => {
  let changeParameterKey;

  if ("infantry" in higherObj) {
    const {
      0: 보병,
      1: 포병,
      2: 기갑,
      3: 공병,
      4: 통신,
      5: 정보,
    } = { ...queryObj };
    const combatObj = Object.assign({
      보병,
      포병,
      기갑,
      공병,
      통신,
      정보,
    });
    changeParameterKey = combatObj;
  } else {
    const {
      0: 정훈,
      1: 밴드,
      2: 군경,
      3: 군종,
      4: 병기,
      5: 의무,
    } = { ...queryObj };
    const SupplyObj = Object.assign({
      정훈,
      밴드,
      군경,
      군종,
      병기,
      의무,
    });
    changeParameterKey = SupplyObj;
  }
  return changeParameterKey;
};

export default getChangeParameterName;
