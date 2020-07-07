import React from "react";
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    let { location, history } = this.props; // props에서 하위의 location과 history 정보만 추출
    if (location.state === undefined) {
      // redirect
      history.push("/");
    }
  }

  render() {
    let { state } = this.props.location; // props에서 하위의 location 정보만 추출
    if (state) {
      return (
        <div className="detail">
          <img
            className="detail__image"
            src={state.poster}
            alt={state.title}
            title={state.title}
          />
          <div className="detail__data">
            <div className="detail__title__info">
              <span className="detail__title">{state.title}</span>
              <span className="detail__year">({state.year})</span>
            </div>
            <ul className="detail__genres">
              {state.genres.map((genre, index) => (
                <li key={index} className="genres__genre">
                  {genre}
                </li>
              ))}
            </ul>
            <p className="detail__summary">{state.summary}</p>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
