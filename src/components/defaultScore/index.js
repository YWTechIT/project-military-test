import React from 'react';

// 초기점수
const defaultScore = {
    category: {
      combatScore: 0,
      supplyScore: 0,
    },
    combat: {
      infantryScore: 0,
      artilleryScore: 0,
      armorScore: 0,
      engineerScore: 0,
      signalScore: 0,
      intelligenceScore: 0,
    },
    supply: {
      affairScore: 0,
      medicScore: 0,
      weaponScore: 0,
      policeScore: 0,
      prayScore: 0,
      bandScore: 0,
    },
  };

export default defaultScore;