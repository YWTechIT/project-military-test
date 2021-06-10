/*
 * Parameter detail of getChangeParameterName
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
 *  OR
 * 
 *  supply = {
 *      affair: 0,
 *      medic: 0,
 *      ...
 *  }
 */

const getChangeParameterName = (combatOrSupplyObj) => {
  let changeParameterName;

  if ("infantry" in combatOrSupplyObj) {
    const {
      infantry: 보병,
      artillery: 포병,
      armor: 기갑,
      engineer: 공병,
      signal: 통신,
      intelligence: 정보,
    } = { ...combatOrSupplyObj };
    const changeCombatName = Object.assign({
      보병,
      포병,
      기갑,
      공병,
      통신,
      정보,
    });
    changeParameterName = changeCombatName;
  } else {
    const {
      affair: 정훈,
      band: 밴드,
      police: 군경,
      pray: 군종,
      weapon: 병기,
      medic: 의무,
    } = { ...combatOrSupplyObj };
    const changeSupplyName = Object.assign({
      정훈,
      밴드,
      군경,
      군종,
      병기,
      의무,
    });
    changeParameterName = changeSupplyName;
  }
  return changeParameterName;
};

export default getChangeParameterName;
