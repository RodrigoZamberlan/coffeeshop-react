import { Component } from "react";
import "./search.css";

class Search extends Component {
  render() {
    return (
      <form id="frmSearch">
        <input type="text" placeholder="Find your coffee..." />
        <button type="submit">
          <div className="line"></div>
          <div className="circle"></div>
        </button>
      </form>
    );
  }
}

export default Search;
