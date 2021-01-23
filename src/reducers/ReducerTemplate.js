import React from 'react';
import uuid from 'uuid/v4';

// 아래와 같이 타입을 변수로 지정해둔다. 오타를 방지할 수 있고 상당히 편리하다.
// 또한 다른 파일에서 사용할 수 있도록 익스포트를 지정해둔다.
export const TYPE_NAME = 'TYPE_NAME';

const TestReducer = (state, action) => {
  switch (action.type) {
    // 스위치문을 통해서 각각의 상황을 정의해둔다.
    case TYPE_NAME:
      break;
    default:
      return;
  }
};

export default TestReducer;