/*
 * Parameter detail of getCurrentPage
 *
 * @ param {dict, dict}
 *
 * @ example
 *  combatDict = {
 *  infantryScore: 0,
 *  artilleryScore: 0,
 *  ...
 *  }
 *
 *  supplyDict = {
 *  affairScore: 0,
 *  medicScore: 0,
 *  ...
 *  }
 */

const getCurrentPage = (combatDict, supplyDict) => {
  let sum = 0;
  let currentPage;

  for (let combatDictKeys in combatDict) {
    sum += combatDict[combatDictKeys];
  }
  if (sum === 0) {
    currentPage = supplyDict;
  } else {
    currentPage = combatDict;
  }
  return currentPage;
};

export default getCurrentPage;