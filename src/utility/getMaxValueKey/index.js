/*
 * Parameter detail of getMaxValueKey
 *
 * @ param {Object}
 *
 * @ example
 *  combat = {
 *      infantry: 0,
 *      artillery: 0,
 *      ...
 *  }
 *
 *  supply = {
 *      affair: 0,
 *      medic: 0,
 *      ...
 *  }
 */

const getMaxValueKey = (Obj) => {
  let maxValue = 0;
  let maxKey = "";

  for (let ObjKey in Obj) {
    if (Obj[ObjKey] > maxValue) {
      maxValue = Obj[ObjKey];
      maxKey = ObjKey;
    }
  }
  return maxKey;
};

export default getMaxValueKey;