import { Component } from "react";
import "./special.css";

class Special extends Component {
  constructor(props) {
    super(props);
    this.state = { resumeDesc: "" };
  }

  componentDidMount() {
    this.setState({
      resumeDesc: this.props.desc.substr(0, 84) + "..."
    });
  }

  render() {
    return (
      <div id="special-coffee">
        <h2 className="title-special">Special for today</h2>
        <div className="coffee-wrapper">
          <img
            className="img"
            src={`img/${this.props.img}.jpg`}
            alt="Capuccino"
          />
          <div className="wrapper-text">
            <h2 className="name">{this.props.name}</h2>
            <p className="description">{this.state.resumeDesc}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Special;
