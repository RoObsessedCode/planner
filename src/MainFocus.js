import React, { Component } from "react";
import { Input, Header, Button, Icon, Form, TextArea } from "semantic-ui-react";
import "./MainFocus.css";

class MainFocus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainFocus: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    //set state based on what user types in
    this.setState({ mainFocus: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState({ mainFocus: "" });
  }

  render() {
    return (
      <div className="MainFocus-HeadDiv" >
        <Form className="MainFocus-Form" onSubmit={e => this.handleSubmit(e)}>
          <Header size="large">
            Which of your obsessions will you tackle today?
          </Header>
          <div className="MainFocus-div">
            <TextArea
              className="MainFocus-TextArea"
              rows={1}
              placeholder="Today's Main Focus..."
              value={this.state.mainFocus}
              onChange={e => this.handleChange(e)}
            />

            <Button className="MainFocus-SubmitButton" type="submit" animated>
              <Button.Content visible>
                <Icon name="right arrow" />
              </Button.Content>
              <Button.Content hidden>Carpe Diem!</Button.Content>
            </Button>
          </div>
        </Form>
      </div>
    );
  }
}

export default MainFocus;
