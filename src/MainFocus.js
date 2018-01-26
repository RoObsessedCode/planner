import React, { Component } from "react";
import {
  Segment,
  Responsive,
  Header,
  Button,
  Icon,
  Form,
  TextArea
} from "semantic-ui-react";
import "./MainFocus.css";

class MainFocus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainFocusInput: "",
      mainFocusResult: "",
      isVisible: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    //set state based on what user types in
    this.setState({ mainFocusInput: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();

    this.setState({ mainFocusResult: this.state.mainFocusInput });
    this.setState({ isVisible: true });
    this.setState({ mainFocusInput: "" });
  }
  // kyle is awesome
  render() {
    return (
      <div className="MainFocus-HeadDiv">
        <Form className="MainFocus-Form" onSubmit={e => this.handleSubmit(e)}>
          <Header size="large">
            Which of your obsessions will you tackle today?
          </Header>
          <div className="MainFocus-div">
            <TextArea
              className="MainFocus-TextArea"
              rows={1}
              placeholder="Today's Main Focus..."
              value={this.state.mainFocusInput}
              onChange={e => this.handleChange(e)}
            />

            <Button className="MainFocus-SubmitButton" type="submit" animated>
              <Button.Content visible>
                <Icon name="right arrow" />
              </Button.Content>
              <Button.Content hidden>Carpe Diem!</Button.Content>
            </Button>
          </div>
          <Segment.Group className="MainFocus-Display">
            {this.state.isVisible && (
              <Responsive as={Segment}>{this.state.mainFocusResult}</Responsive>
            )}
          </Segment.Group>
        </Form>
      </div>
    );
  }
}

export default MainFocus;
