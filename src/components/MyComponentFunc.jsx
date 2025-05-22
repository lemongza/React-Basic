import React, { useState } from "react";

const MyComponentFunc = ({ name, children }) => {
  //상태변수와 setter 함수 선언
  const [value, setValue] = useState(0);
  const [inputs, setInputs] = useState({
    message: "",
    username: "",
  });

  const handleChange = (e) => {
    setInputs({
      ...inputs, //모든 속성을 펼쳐서 전달
      [e.target.name]: e.target.value,
    });
  };

  const { message, username } = inputs; //타입 똑같은거 오브젝트로 묶기

  return (
    <div>
      <h2>함수형 컴포넌트</h2>
      <h3>Hello {name} !</h3>
      {children}
      <p>상태변수 value = {value}</p>
      <button onClick={() => setValue(value + 1)}>증가</button>
      <button onClick={() => setValue(value - 1)}>감소</button>
      <br />
      <p>State message의 값 = {message}</p>
      <input name="message" value={message} onChange={handleChange}></input>
      <br />
      <p>State username의 값 = {username}</p>
      <input name="username" value={username} onChange={handleChange}></input>
    </div>
  );
};

export default MyComponentFunc;
