/*
 * Parameter detail of getParseArrayToObj
 *
 * @ param {Array}
 * 
 * @ description: Array형태로 들어온 queryString을 `obj(key : value)`형태로 바꾼다.
 * 
 * @ example
 *  queryString = ["005", "007", "001", "000", "004", "004"]
 */


const getParseArrayToObj = (queryString) => {
  const queryTempObj = Object();

  for (let i = 0; i < 6; i++) {
    let temp = Number(queryString[i]);
    queryTempObj[i] = temp;
  }
  return queryTempObj;
};

export default getParseArrayToObj;