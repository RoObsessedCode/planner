import React, { Component } from "react";
import { Input, Header, Button, Icon } from "semantic-ui-react";

class MainFocus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainFocus: ''
    }
  }

  handleChange(event) {
    //set state based on what user types in
    this.setState({mainFocus: event.target.value})
  }

  render() {
    return (
      <div>
        <Header size="large">
          Which of your main obsessions will you tackle today?
        </Header>
        <Input placeholder="Today's Main Focus..." />
        <Button animated>
          <Button.Content visible><Icon name='right arrow' /></Button.Content>
          <Button.Content hidden>Carpe Diem!</Button.Content>
        </Button>
      </div>
    );
  }
}

export default MainFocus;
