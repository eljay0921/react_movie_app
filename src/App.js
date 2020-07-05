import React from "react";

const FoodILike = [
  {
    id: 0,
    name: "kimchi",
    image:
      "https://cdn.crowdpic.net/detail-thumb/thumb_d_AAA4C5E8C1E29791413BFBFF5419BA73.jpg",
  },
  {
    id: 1,
    name: "ramen",
    image: "https://t1.daumcdn.net/cfile/tistory/035F8240519F7EF70C",
  },
  {
    id: 2,
    name: "samgiopsal",
    image:
      "https://cphoto.asiae.co.kr/listimglink/6/2017122807215214567_1514413315.jpg",
  },
  {
    id: 3,
    name: "jjuggumi",
    image:
      "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F2763B2415847A02C03",
  },
];

function Food({ name, picture }) {
  return (
    <div>
      <h2>I Like {name}</h2>
      <img src={picture} alt={name} width="500" height="300" />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      {FoodILike.map((dish) => (
        <Food key={dish.id} name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}

export default App;
