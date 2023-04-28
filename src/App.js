import React from "react";

class Red extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      flag: false,
    };
  }
  handleClick() {
    this.setState({ flag: !this.state.flag });
  }

  render() {
    return (
      <div className="wrapper">
        <div
          className={this.state.flag === true ? "blue" : "red"}
          onClick={() => this.handleClick()}
        >
          Red
        </div>
        <div
          className={this.state.flag === true ? "red" : "blue"}
          onClick={() => this.handleClick()}
        >
          Blue
        </div>
      </div>
    );
  }
}
export default Red;
