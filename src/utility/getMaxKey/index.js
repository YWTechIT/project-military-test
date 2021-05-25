// 점수 계산하는 함수
// object example
// const DEFAULT_SCORE = {
//   category: {
//     combatScore: 0,
//     supplyScore: 0,
//   },
//   combat: {
//     infantryScore: 0,
//     artilleryScore: 0,
//     armorScore: 0,
//     engineerScore: 0,
//     signalScore: 0,
//     intelligenceScore: 0,
//   },
//   supply: {
//     affairScore: 0,
//     medicScore: 0,
//     weaponScore: 0,
//     policeScore: 0,
//     prayScore: 0,
//     bandScore: 0,
//   },
// };

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
