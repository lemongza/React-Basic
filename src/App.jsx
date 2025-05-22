import "./App.css";
import MyComponent from "./components/MyComponent";
import MyComponentFunc from "./components/MyComponentFunc";

function App() {
  return (
    <>
      <MyComponent name="ReactJS" />
      <MyComponent age={100} />
      <hr />
      <MyComponentFunc name="나는 함수형">
        <p>함수형의 하위 엘리먼트</p>
      </MyComponentFunc>
    </>
  );
}

export default App;
