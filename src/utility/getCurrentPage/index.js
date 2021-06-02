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

const getCurrentPage = (combat, supply) => {
  let sum = 0;
  let currentPage;

  for (let combatKeys in combat) {
    sum += combat[combatKeys];
  }
  if (sum === 0) {
    currentPage = supply;
  } else {
    currentPage = combat;
  }
  return currentPage;
};

export default getCurrentPage;