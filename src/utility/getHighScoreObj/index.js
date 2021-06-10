/*
 * Parameter detail of getCurrentPage
 *
 * @ param {Object, Object}
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
 *  ...
 *  }
 */

const getHighScoreObj = (combat, supply) => {
  let sum = 0;
  let highScore;

  for (let combatKeys in combat) {
    sum += combat[combatKeys];
  }
  if (sum === 0) {
    highScore = supply;
  } else {
    highScore = combat;
  }
  return highScore;
};

export default getHighScoreObj;