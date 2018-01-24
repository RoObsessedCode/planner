import React, { Component } from "react";
import { Input, Header } from "semantic-ui-react";

class MainFocus extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header size="large">
          Which of your main obsession's will you tackle today
        </Header>
        <Input placeholder="Today\'s Main Focus..." />
      </div>
    );
  }
}

export default MainFocus
