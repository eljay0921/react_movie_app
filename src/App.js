import React from "react";

function Food(props) {
  console.log(props);
  return <h1> I Like Potato ~_~</h1>;
}

function App() {
  return (
    <div className="App">
      <h1>Hi</h1>

      {/* name="kinchi" => HTML 과 같은 형태인데, JSX도 이런 문법을 사용함 : props (properties) */}
      <Food
        fav="kimchi"
        something={true}
        papapap={["hi", "bye", 1, 2, 3, false]}
      />
    </div>
  );
}

export default App;
