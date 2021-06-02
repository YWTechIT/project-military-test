/*
 * Parameter detail of getMaxValueKey
 *
 * @ param {dict}
 *
 * @ example
 *  combat = {
 *  infantryScore: 0,
 *  artilleryScore: 0,
 *  ...
 *  }
 *
 *  supply = {
 *  affairScore: 0,
 *  medicScore: 0,
 *  ...
 *  }
 */

const getMaxValueKey = (dict) => {
  let maxValue = 0;
  let maxKey = "";

  for (let dictKey in dict) {
    if (dict[dictKey] > maxValue) {
      maxValue = dict[dictKey];
      maxKey = dictKey;
    }
  }
  return maxKey;
};

export default getMaxValueKey;