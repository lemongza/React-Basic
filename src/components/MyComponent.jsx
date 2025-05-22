import React, { Component } from "react";
import PropTypes from "prop-types";
import "./MyComponent.css";

//rcc
export default class MyComponent extends Component {
  //상태변수를 포함하는 state 객체 선언
  state = {
    value: 0,
    message: "",
    username: "",
    isValid: false,
  };
  //Event Handler
  handleDecrement = () => this.setState({ value: this.state.value - 1 });

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value, //변수이름 동적으로 처리 [e.target.name] name=> message, username
    });
  };

  handleEnter = (e) => {
    if (e.keyCode === 13) {
      this.setState({
        isValid: true,
        message: "",
      });
      this.myUsername.focus();
    }
  };

  //Event Handler 2
  // -> bind(this)를 생성자에서 해주어야 this 사용 가능
  handleDecrement2() {
    this.setState({ value: this.state.value - 1 });
  }

  render() {
    //destructuring assignment
    const { name, age } = this.props;
    const { value, message, username, isValid } = this.state;
    const { handleDecrement, handleChange, handleEnter } = this;

    return (
      <div>
        <h2>클래스형 컴포넌트</h2>
        <h3>
          Hello {name}/{age}
        </h3>
        <p>상태변수 value = {value}</p>
        <button onClick={() => this.setState({ value: value + 1 })}>
          증가
        </button>
        <button onClick={handleDecrement}>감소</button>
        <br />
        <p>State message의 값 = {message}</p>
        <input
          name="message"
          value={message}
          onChange={handleChange}
          onKeyDown={handleEnter}
        ></input>
        <br />
        <p>State username의 값 = {username}</p>
        <input
          name="username"
          value={username}
          onChange={handleChange}
          className={isValid ? "success" : "failure"}
          ref={(ref) => (this.myUsername = ref)}
        />
      </div>
    );
  }
}

//rdp
MyComponent.defaultProps = {
  name: "리액트JS",
};

//rpt
MyComponent.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired,
};
