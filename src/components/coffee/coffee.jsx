import { Component } from "react";
import "./coffee.css";

class Coffee extends Component {
  render() {
    return (
      <div className="coffee-wrapper">
        <img
          className="img"
          src={`img/${this.props.img}.jpg`}
          alt="Capuccino"
        />
        <h2 className="name">{this.props.name}</h2>
        <p className="description">{this.props.desc}</p>

        <div className="wrapper-price">
          <p className="price">
            <span>$</span> {this.props.price}
          </p>

          <button className="add">+</button>
        </div>
      </div>
    );
  }
}

export default Coffee;
