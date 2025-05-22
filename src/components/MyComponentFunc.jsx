import React, { useState } from "react";

const MyComponentFunc = ({ name, children }) => {
  //상태변수와 setter 함수 선언
  const [value, setValue] = useState(0);

  return (
    <div>
      <h2>함수형 컴포넌트</h2>
      <h3>Hello {name} !</h3>
      {children}
      <p>상태변수 value = {value}</p>
      <button onClick={() => setValue(value + 1)}>증가</button>
      <button onClick={() => setValue(value - 1)}>감소</button>
    </div>
  );
};

export default MyComponentFunc;
