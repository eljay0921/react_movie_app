import React from "react";

class Detail extends React.Component {
  componentDidMount() {
    let { location, history } = this.props; // props에서 하위의 location과 history 정보만 추출
    if (location.state === undefined) {
      // redirect
      history.push("/");
    }
  }

  render() {
    let { location } = this.props; // props에서 하위의 location 정보만 추출
    if (location.state) {
      return <span>{location.state.title}</span>;
    } else {
      return null;
    }
  }
}

export default Detail;
