import { connect } from "react-redux";
import axios from "axios";
import { useEffect } from "react";
import { init, add, remove } from "./actionCreater";
import Row from "./components/Row";

import "./styles.css";

function App({ lists, remove, add, init }) {
  useEffect(() => {
    axios
      .get("https://60c91bc47dafc90017ffc23d.mockapi.io/api/v1/movies")
      .then((res) => {
        init(res.data);
      });
  }, []);

  return (
    <div className="App">
      <nav>
        <img className="logo" src="../netflix.png" alt="" />
      </nav>
      <main>
        <Row
          title="My List"
          buttonName="Remove"
          data={lists.mylist}
          handleClick={remove}
        />
        <Row
          title="Recommendations"
          buttonName="Add"
          data={lists.recommendations}
          handleClick={add}
        />
      </main>
    </div>
  );
}

export default connect((state) => ({ lists: state }), {
  init,
  add,
  remove
})(App);
