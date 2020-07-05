import React from "react";

class App extends React.Component {
  state = {
    count: 3,
    name: "jin",
  };

  add = () => {
    this.setState((current) => ({ count: current.count + 1 }));
    console.log(this.state);
  };

  minus = () => {
    this.setState((current) => ({ count: current.count - 1 }));
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <h1>My state is : {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
