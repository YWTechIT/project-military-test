import React from 'react';

// 점수 계산하는 함수
const getCode = (object) => {
    let maxValue = 0;
    let maxKey = "";

    for (let objectKey in object) {
      if (object[objectKey] > maxValue) {
        maxValue = object[objectKey];
        maxKey = objectKey;
      }
    }
    return maxKey;
  };

export default getCode;
