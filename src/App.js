import { connect } from "react-redux";
import { init, add, remove } from "./actionCreater";
import axios from "axios";
import { useEffect } from "react";

import "./styles.css";

function App({ lists, remove, add, init }) {
  useEffect(() => {
    axios
      .get("https://60c91bc47dafc90017ffc23d.mockapi.io/api/v1/movies")
      .then((res) => {
        init(res.data);
        // console.log(res.data);
      });
  }, []);

  return (
    <div className="App">
      <nav>
        <img className="logo" src="../netflix.png" alt="" />
      </nav>
      <main>
        <div className="my-list">
          <h2>My List</h2>
          <ul className="list">
            {lists.mylist.map((item) => {
              return (
                <li className="item" key={item.id}>
                  <div className="image">
                    <img src={item.img} alt="" />
                    <div className="btn">
                      <button
                        onClick={() => {
                          remove(item.id);
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="title">{item.title}</div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="recommendations">
          <h2>Recommendations</h2>
          <ul className="list">
            {lists.recommendations.map((item) => {
              return (
                <li className="item" key={item.id}>
                  <div className="image">
                    <img src={item.img} alt="" />
                    <div className="btn">
                      <button
                        onClick={() => {
                          add(item.id);
                        }}
                      >
                        Add
                      </button>
                    </div>
                  </div>
                  <div className="title">{item.title}</div>
                </li>
              );
            })}
          </ul>
        </div>
      </main>
    </div>
  );
}

export default connect((state) => ({ lists: state }), {
  init,
  add,
  remove
})(App);
