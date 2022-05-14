import { Component } from "react";
import "./listCategories.css";
import ListCoffee from "../list-coffee/listCoffee";

class ListCategories extends Component {
  handleClick = (event) => {
    var listMenus = document.getElementsByClassName("item-list");
    for (let item of listMenus) {
      item.classList.remove("active");
    }
    event.target.classList.add("active");
    this.setState({ category: event.target.textContent });
  };

  render() {
    return (
      <div className="wrapper">
        <div className="list-wrapper">
          <div className="mask"></div>
          <ol className="list">
            <li className="item-list active" onClick={this.handleClick}>
              Capuccino
            </li>
            <li className="item-list" onClick={this.handleClick}>
              Espresso
            </li>
            <li className="item-list" onClick={this.handleClick}>
              Latte
            </li>
            <li className="item-list" onClick={this.handleClick}>
              Flat White
            </li>
            <li className="item-list" onClick={this.handleClick}>
              Iced Coffee
            </li>
            <li className="item-list" onClick={this.handleClick}>
              Cold Brew
            </li>
            <li className="item-list" onClick={this.handleClick}>
              Alcoholic
            </li>
          </ol>
        </div>

        {/* How can i pass the category in my state? */}
        <ListCoffee category="capuccino" />
      </div>
    );
  }
}

export default ListCategories;
