/*
* Parameter detail of getMaxValueKey 
*
* @ param {dict} 
* @ example
*  combat = {
*  infantryScore = 0,
*  artilleryScore = 0,
*  ...
*  }
*/

import PropTypes from "prop-types";

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

getMaxValueKey.PropTypes = {
  dict: PropTypes.object.isRequired
};

export default getMaxValueKey;
