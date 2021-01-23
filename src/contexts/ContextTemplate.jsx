import React, { createContext, useReducer } from 'react';
import ReducerTemplate from '../reducers/ReducerTemplate';

export const TestContext = createContext();

// 이니셜 스테이트는 데이터 저장소의 메인 데이터가 된다. 이 데이터들을 조정해서 데이터를 관리하게 된다.
const initialState = [ {
  state: '스테이트',
}, ];

// 이렇게 하면 사용할 준비는 다 되었다.
// 사용할 때엔 이 파일을 불러와서 사용할 컴포넌트의 부모태그로 만들어주면 된다.
const TestContextProvider = ({ children, }) => {
  const [ state, dispatch, ] = useReducer(ReducerTemplate, initialState);

  return (
    <TestContext.Provider value={{ state, dispatch, }}>
      { children }
    </TestContext.Provider>
  );
};